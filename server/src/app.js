import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Moerell MixVault API is running",
  });
});

app.use("/api/payments", paymentRoutes);

export default app;