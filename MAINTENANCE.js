/*CMD
  command: MAINTENANCE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: MAINTENANCE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

options = {
  fields : {
  currency : "DOGE" ,
  amount: 10000 ,
 },
  onIncome: "/paymentDoge",
  

}

Libs.CoinPayments.callTestPermanentWalletIncome(options);

