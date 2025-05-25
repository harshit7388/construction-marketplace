import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  brand: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
