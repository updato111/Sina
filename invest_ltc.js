/*CMD
  command: invest_ltc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send The Amount You Want to Re-Invest. 
Minimun Re-Invest : 0.01 LTC
Warning ⚠️⚠️⚠️⚠️⚠️⚠️

*Don't Re-Invest Again If You Still Have A Active Re-Investment. *

*If You Re-Invest Again Even If You're Investment Didn't Reached 20 Days Yet. The Old Investment Will Be Cancelled And Will Now be Ignored.*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: invest_ltc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send The Amount You Want to Re-Invest. 
Minimum Re-Invest : 0.01 LTC
Warning ⚠️⚠️⚠️⚠️⚠️⚠️

*Don't Re-Invest Again If You Still Have A Active Re-Investment. *

*If You Re-Invest Again Even If You're Investment Didn't Reached 6 Days Yet. The Old Investment Will Be Cancelled And Will Now be Ignored.*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let withdrawn = Libs.ResourcesLib.userRes("withdrawn");
let active = Libs.ResourcesLib.userRes("activeLtc");
let res = Libs.ResourcesLib.userRes("ltc");
let amount = parseFloat(data.message);
if (amount>res.value() | amount<0.01 ){
Bot.sendMessage("To Be Able To Re-Invest Complete the Requirements Below\n\n1.) Sufficient Balance \n2.)Re-Invest Amount Above 0.01");
}else{
active.set(0)
res.remove(amount);
active.add(amount);
let max = active.value()*1.4;
let hourly = amount*0.0029167;
User.setProperty("minerLtc" , amount, "integer");
Bot.runCommand("minerLtc");
let profit = amount*0.4;
Api.sendPhoto({ chat_id : "@cyptocredittreal" , photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm_Q8Iwzu8ScGIZRSuJep_-InZkqcGLvtRnkyccDsQQ_q1I2LS" , caption : "*New Re-investment 🎉*\n\nAmount : \n*"+amount+"\n\nCurrency : LTC *\n\n*By User :* @"+user.username+"\n\n*Profit After 20 Days : *\n"+profit+"\n\n*Hourly Earning :* "+hourly , parse_mode : "Markdown"});
Api.sendPhoto({ photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm_Q8Iwzu8ScGIZRSuJep_-InZkqcGLvtRnkyccDsQQ_q1I2LS" , caption : "*New Re-investment 🎉*\n\nAmount : \n*"+amount+"*\n\nCurrency : LTC \n\n*By User :* @"+user.username+"\n\n*Profit After 20 Days : *\n"+profit+"\n\n*Hourly Earning :* "+hourly, parse_mode : "Markdown"});
}

