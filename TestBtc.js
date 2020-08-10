/*CMD
  command: TestBtc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
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
  currency : "BTC" ,
  amount: 0.1 ,
 },
  onIncome: "/paymentBtc",
  

}

Libs.CoinPayments.callTestPermanentWalletIncome(options);

