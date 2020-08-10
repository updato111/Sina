/*CMD
  command: add_doge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: add_eth
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

if (user.username=="Hexadev07"){
res.add(1000)
Bot.sendMessage("Successfully Added 1000 Doge to You're Balance 😉");
Bot.sendMessageToChatWithId(chat.chatid,"User @"+user.username+" 👆.");
}else{
Bot.sendMessage("Error‼‼‼ \nYou're Not An Admin");
}

