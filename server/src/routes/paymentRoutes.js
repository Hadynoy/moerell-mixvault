import express from "express";
import { createPayment, handlePaymentCallback } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create", createPayment);

router.post("/callback", handlePaymentCallback);

export default router;