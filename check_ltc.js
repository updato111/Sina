/*CMD
  command: check_ltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: check_ltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("ltc", tgid);

Bot.sendMessage("User "+tgid + " Balance Of LTC is "+res.value().toFixed(8));

