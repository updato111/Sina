/*CMD
  command: send_btc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the amount now
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: send_bch
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Admin Send The Amount You Want To send. 
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
if (msg=="Cancel"){
Bot.runCommand("Admin")
}else{
let rem = parseFloat(msg);
let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("btc", tgid);
res.add(rem); 
Bot.sendMessage("Success Check His/Her Balance Now");
Bot.sendMessageToChatWithId(tgid, "The Admin Added "+rem+" BTC To You're Balance ");
Bot.runCommand("Admin");
}

