/*CMD
  command: /balltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var usdd  = 41.63;
 
let res =  Libs.ResourcesLib.userRes("ltc");
let active = Libs.ResourcesLib.userRes("activeLtc");
let wd = Libs.ResourcesLib.userRes("wdltc");

Bot.sendMessage("👤" +user.first_name + " (" + user.username + ")\n\n➖ *Withdrawable Balance: * \n"+res.value().toFixed(8)+" ~ "+(usdd*res.value()).toFixed(2)+"$\n\n💳 *Active Investments:*\n"+active.value().toFixed(8)+" ~ "+(usdd*active.value()).toFixed(2)+"$\n\n💸* Total Withdrawn:*\n"+wd.value().toFixed(8)+" ~ "+(usdd*wd.value()).toFixed(2)+"$");
