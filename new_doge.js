/*CMD
  command: new_doge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: new_doge
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "DOGE",
  label: "myLabel",
  onSuccess: "/walletDoge",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/paymentDoge"
});

