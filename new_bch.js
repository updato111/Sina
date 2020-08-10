/*CMD
  command: new_bch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: new_bch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "BCH",
  label: "User @"+user.username,
  onSuccess: "/walletBch",
  //onIPN: "/onPermanentWalletIPN",
  onIncome: "/paymentBch"
});

