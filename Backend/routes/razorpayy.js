const shortid = require("shortid");
const Razorpay = require("razorpay");
const path = require("path");
const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET_KEY,
});
router.get("/logo  ", (req, res) => {
  res.sendFile(path.join(__dirname, "pay.jpg"));
});

router.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = req.query.price;
  const currency = "INR";

  console.log(amount);

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
