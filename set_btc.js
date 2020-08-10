/*CMD
  command: set_btc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send me the new Bitcoin address
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
if(msg.length=>30){
Bot.sendMessage("✅Your wallet address updated successfully to " + msg);
User.setProperty("addressBtc" , msg, "text");
}else{
Bot.sendMessage("❌ Invalid Wallet Address");
return
}

