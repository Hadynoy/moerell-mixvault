import crypto from "crypto";
import { get } from "@vercel/blob";
import {
  createOpayPayment,
  queryOpayPaymentStatus,
} from "../services/opayService.js";

export async function downloadMix(req, res) {
  try {
    const { reference } = req.params;

    if (!reference) {
      return res.status(400).json({
        success: false,
        message: "Payment reference is required.",
      });
    }

    const paymentStatus = await queryOpayPaymentStatus(reference);

    if (
      paymentStatus?.code !== "00000" ||
      paymentStatus?.data?.status !== "SUCCESS"
    ) {
      return res.status(403).json({
        success: false,
        message: "Payment has not been verified.",
      });
    }

    const result = await get("Moerell-Piano Wave.mp3", {
      access: "private",
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Mix not found.",
      });
    }

    res.setHeader(
      "Content-Type",
      result.blob.contentType || "audio/mpeg"
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Moerell-Piano Wave.mp3"'
    );

    result.stream.pipe(res);
  } catch (error) {
    console.error(
      "Mix download error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Unable to download mix.",
    });
  }
}

export async function createPayment(req, res) {
  try {
    const reference = `MOERELL-${Date.now()}`;

    const payment = await createOpayPayment({
      reference,
      amount: 100000,
      returnUrl: `${process.env.FRONTEND_URL}/payment/success`,
      userName: "Moerell Customer",
      userEmail: "customer@example.com",
      userMobile: "08000000000",
    });

    if (payment?.code !== "00000") {
      console.error("OPay create payment failed:", payment);

      return res.status(400).json({
        success: false,
        message: payment?.message || "Unable to create payment.",
      });
    }

    res.json({
      success: true,
      reference,
      payment,
      cashierUrl: payment.data.cashierUrl,
    });
  } catch (error) {
    console.error(
      "OPay payment error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message: "Unable to create payment.",
    });
  }
}

export async function handlePaymentCallback(req, res) {
  try {
    console.log("OPay callback received:");
    console.log(req.body);

    const { reference, sha512 } = req.body;

    if (!reference || !sha512) {
      return res.status(400).json({
        success: false,
        message: "Payment reference and signature are required.",
      });
    }

    const expectedSignature = crypto
      .createHmac("sha512", process.env.OPAY_PRIVATE_KEY)
      .update(reference)
      .digest("hex");

    if (sha512 !== expectedSignature) {
      console.error("Invalid OPay callback signature.");

      return res.status(401).json({
        success: false,
        message: "Invalid callback signature.",
      });
    }

    const paymentStatus = await queryOpayPaymentStatus(reference);

    console.log("OPay payment status:");
    console.log(paymentStatus);

    if (paymentStatus?.code !== "00000") {
      return res.status(400).json({
        success: false,
        message: "Unable to verify payment.",
      });
    }

    const status = paymentStatus?.data?.status;

    if (status === "SUCCESS") {
      console.log(`Payment ${reference} verified successfully.`);

      // We will add secure mix delivery here next.
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(
      "OPay callback verification error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to verify payment.",
    });
  }
}