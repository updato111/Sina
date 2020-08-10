/*CMD
  command: set_doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Ok!! Send the new wallet address
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: set_doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're DOGE Address. 

*Warning ⚠️⚠️

Make Sure The Address You Post Is An DOGE Address. *
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
if(msg.length==34){
Bot.sendMessage("✅Your wallet address updated successfully to " + msg);
User.setProperty("addressDoge" , msg, "text");
}else{
Bot.sendMessage("❌ Invalid Wallet Address /set_doge");
return
}

