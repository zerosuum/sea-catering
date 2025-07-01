import { Router } from "express";
import Subscription from "../models/subscription.model.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      planName,
      planPrice,
      mealTypes,
      deliveryDays,
      allergies,
    } = req.body;

    if (
      !name ||
      !phone ||
      !planName ||
      !planPrice ||
      !mealTypes ||
      !deliveryDays
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const newSubscription = new Subscription({
      name,
      phone,
      planName,
      planPrice,
      mealTypes,
      deliveryDays,
      allergies,
    });
    await newSubscription.save();
    res
      .status(201)
      .json({
        message: "Subscription created successfully!",
        subscription: newSubscription,
      });
  } catch (error) {
    console.error("=> [ERROR] Gagal membuat subscription:", error);
    res
      .status(500)
      .json({ message: "Server error while creating subscription.", error });
  }
});

export default router;
