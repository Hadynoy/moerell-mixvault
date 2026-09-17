import axios from "axios";

const OPAY_URL =
  "https://testapi.opaycheckout.com/api/v1/international/cashier/create";

export async function createOpayPayment({
  reference,
  amount,
  returnUrl,
  userName,
  userEmail,
  userMobile,
}) {
  const payload = {
    country: "NG",
    reference,
    amount: {
      currency: "NGN",
      total: amount,
    },
    returnUrl,
    userClientIP: "127.0.0.1",
    product: {
      name: "Piano Wave",
      description: "Moerell MixVault — Piano Wave",
    },
    userInfo: {
      userName,
      userEmail,
      userMobile,
    },
  };

  const response = await axios.post(OPAY_URL, payload, {
    headers: {
      Authorization: `Bearer ${process.env.OPAY_PUBLIC_KEY}`,
      MerchantId: process.env.OPAY_MERCHANT_ID,
      "Content-Type": "application/json",
    },
  });

  return response.data;
}