/*CMD
  command: /paymentEth
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: /paymentEth
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");

let eth = Libs.ResourcesLib.userRes("eth");
let ltc = Libs.ResourcesLib.userRes("ltc");
let btc = Libs.ResourcesLib.userRes("btc");
let bch = Libs.ResourcesLib.userRes("bch");

let wallet = options.address;
let currency = options.currency;
let amount = options.amount;
let add = parseFloat(amount); 
User.setProperty("minerEth" , add, "integer");
Bot.runCommand("minerEth");

let fiat_amount = options.fiat_amount;
let fiat_currency = options.fiat_coin;

let fee = options.fee;

let txn_id = options.txn_id

// see another fields by
//Bot.sendMessage(inspect(options));
eth.add(amount);
Bot.sendMessage(
   "*Deposit Received 📥*" +
   "\n\nReceiving Address :\n`"+ wallet + "`" +
   "\n\n*Amount Received 💳*:\n" +
amount + " " + currency + " (" + fiat_amount + " " + fiat_currency + ")" +
   "\n*Transaction Fee Was *: " + fee +
   "\n\nTxnID: "  + "\n["+txn_id+"]"+"(https://dogechain.info/tx/"+txn_id+")",{disable_web_page_preview: true}
);

Bot.sendMessage("Investment Added To Balance ✅\n\n Amount : "+amount); 
Api.sendMessage({ chat_id : "@Hexabotdev55" , text : "*Deposit Received 📥*" +
   "\n\nReceiving Address :\n`"+ wallet + "`" +
   "\n\n*Amount Received 💳*:\n" +
amount + " " + currency + " (" + fiat_amount + " " + fiat_currency + ")" +
   "\n*Transaction Fee Was *: " + fee +
   "\n\nTxnID: " + "\n["+txn_id+"]"+"(https://dogechain.info/tx/"+txn_id+")"+"\n\nBy User : @"+user.username + "("+user.first_name+")", parse_mode : "Markdown" , disable_web_page_preview: true
});
let totalEth = Bot.getProperty("totalEth");
let total = totalEth+add;
Bot.setProperty("totalETH" , total , "integer");

