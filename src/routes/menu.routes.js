import { Router } from "express";
import MenuItem from "../models/menuItem.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching menu items.", error });
  }
});

export default router;
