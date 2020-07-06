<?php include_once("index.html"); 

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey('sk_test_SZcoPdcZP6p64dv3wQGOINIv');

$intent = \Stripe\PaymentIntent::create([
  'amount' => 1099,
  'currency' => 'usd',
  // Verify your integration in this guide by including this parameter
  'metadata' => ['integration_check' => 'accept_a_payment'],
]);

?>