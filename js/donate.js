var express = require("express");
var router = express.Router();
// app.js already makes these routes start at /donate!

// Donation form.
router.get("/", function(req, res) {
  res.render("donate");
});

// Thanks page.
router.post("/thanks", function(req, res) {
  res.render("thanks", { title: "Thanks!" });
});

router.post("/", async (req, res, next) => {
  // TO ADD: data validation, storing errors in an `errors` variable!
  const name = req.body.name;
  const email = req.body.email;
  const amount = req.body.amount;
  if (true) {
    // Data is valid!
    try {
      // Create a PI:
      const stripe = require("stripe")("sk_test_SZcoPdcZP6p64dv3wQGOINIv");
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // In cents
        currency: "usd",
        receipt_email: email
      });
      res.render("card", {
        name: name,
        amount: amount,
        intentSecret: paymentIntent.client_secret
      });
    } catch (err) {
      console.log("Error! ", err.message);
    }
  } else {
    res.render("donate", { title: "Donate", errors: errors });
  }
});
