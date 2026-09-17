import express from "express";
import {
  createPayment,
  handlePaymentCallback,
  downloadMix,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create", createPayment);
router.post("/callback", handlePaymentCallback);
router.get("/download/:reference", downloadMix);

export default router;