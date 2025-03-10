const stripe = require("stripe")(
  "sk_test_51QxRx9BIS9mG2bnKNJYmCTXDeNqT0ghkn6hJ2fbWoxm0G38hrUST9Ak0pKzF71uOtBBBNQxZQYZenqEBO4ZDHDMs00Z6xqOc36"
);

module.exports = {
  async generatePaymentLink(order) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `http://localhost:3000/payment/success/${order._id}`,
        cancel_url: "http://localhost:3000/cancel",
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: Math.round(order.totalAmount * 100),
              product_data: {
                name: "Pizza Burger",
              },
            },
            quantity: 1,
          },
        ],
      });

      console.log("Session:", session);

      return { payment_url: session.url };
    } catch (error) {
      throw new Error(`Failed to generate payment link: ${error.message}`);
    }
  },
};
