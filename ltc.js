/*CMD
  command: ltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: ltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("walletLtc");
var button = [{ title : "Generate New Address 📬" , command : "new_ltc"}]
if(wallet==undefined){
Bot.sendInlineKeyboard(button, "You Don't Own A Address Yet Click The Button Below to Own One");
}else{
Bot.sendInlineKeyboard(button ,"You're Personal Litecoin Deposit Address Is Given Below ⬇ \n`"+wallet+"`\n\n*You Can Re-Use The Address as Many Times as You want*\n\nIf You Want A New Deposit Address Click the Button Below");
}

