import { createOpayPayment } from "../services/opayService.js";

export async function createPayment(req, res) {
  try {
    const reference = `MOERELL-${Date.now()}`;

    const payment = await createOpayPayment({
      reference,
      amount: 100000,
      returnUrl: `${process.env.FRONTEND_URL}/payment-result`,
      userName: "Moerell Customer",
      userEmail: "customer@example.com",
      userMobile: "08000000000",
    });

    res.json({
      success: true,
      reference,
      payment,
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
  console.log("OPay callback received:");
  console.log(req.body);

  res.status(200).json({
    success: true,
  });
}