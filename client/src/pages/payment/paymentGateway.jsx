import { saveData } from "../../redux/auth/localStorage";

export default async function displayRazorpay(price, navigateToLogin) {
  const data = await fetch(
    `https://netflixbackend11.herokuapp.com/payment/razorpay?price=${price}`,
    {
      method: "POST",
    }
  ).then((t) => t.json());

  console.log(data);

  const options = {
    key: "rzp_test_XmZRCQRG4zhL6B",
    currency: data.currency,
    amount: data.amount,
    name: "Netflix Subscription",
    description: "Wallet Transaction",
    image: "https://netflixbackend11.herokuapp.com/payment/logo",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
      saveData("payment", true);
      window.location.reload(false);
    },
    prefill: {
      name: "Netflix",
      email: "netflix@netflix.com",
      contact: "9560916993",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
