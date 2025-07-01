import { Router } from "express";
import Testimonial from "../models/testimonial.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ _id: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching testimonials.", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, review, rating } = req.body;
    if (!name || !review || !rating) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newTestimonial = new Testimonial({ name, review, rating });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while creating testimonial.", error });
  }
});

export default router;
