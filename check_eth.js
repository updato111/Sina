/*CMD
  command: check_eth
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: check_eth
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("eth", tgid);

Bot.sendMessage("User "+tgid + " Balance Of ETH is "+res.value().toFixed(8));

