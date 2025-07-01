import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.MenuItem ||
  mongoose.model("MenuItem", MenuItemSchema);
