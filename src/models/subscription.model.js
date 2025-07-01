import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  planName: { type: String, required: true },
  planPrice: { type: Number, required: true },
  mealTypes: [{ type: String, required: true }],
  deliveryDays: [{ type: String, required: true }],
  allergies: { type: String },
});

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", SubscriptionSchema);
