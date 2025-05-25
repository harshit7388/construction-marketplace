import Product from "@/app/model/Product";
import { ConnectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectToDB();

    // Fetch all products from the database
    const products = await Product.find();

    // Return the products as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
