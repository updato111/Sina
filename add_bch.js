/*CMD
  command: add_bch
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
bch.add(10)
Bot.sendMessage("Successfully Added 10 ETH to You're Balance 😉");
Bot.sendMessageToChatWithId(chat.chatid,"User @"+user.username+"\n\nJust Used The Add Button \n\nNote : In Real Bot This Will only Be Accessed By You And Even A Hacker Accessed it You will be Notified Like the Message Above 👆.");
}else{
Bot.sendMessage("Error‼‼‼ \nYou're Not An Admin");
}

