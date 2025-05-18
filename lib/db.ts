import mongoose from "mongoose";

const MongoDB_URI = process.env.MONGODB_URI!;

if (!MongoDB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function ConnectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = { bufferCommands: true, maxPoolSize: 10 };
    cached.promise = mongoose
      .connect(MongoDB_URI, options)
      .then(() => mongoose.connection)
      .catch();
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
