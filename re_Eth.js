/*CMD
  command: re_Eth
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello admin send the amount now
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: on_Remove_Doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Admin Send The Amount You Want to Remove .
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
if (msg=="Cancel"){
Bot.runCommand("Admin")
}else{
let rem = parseFloat(msg);
let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("eth", tgid);
res.removeAnyway(rem); 
Bot.sendMessage("Success Check Hes Balance Now");
Bot.sendMessageToChatWithId(tgid, "The Admin Remove "+rem+" ETH From You're Balance ");
Bot.runCommand("Admin");
}

