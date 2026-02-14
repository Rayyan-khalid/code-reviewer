import express from "express";
import { getReview } from "../controllers/ai.controller.js"; // named import

const router = express.Router();

// router.post("/get-response", getResponse);
router.post("/get-review", getReview);

export default router;
