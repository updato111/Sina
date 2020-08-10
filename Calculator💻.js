/*CMD
  command: Calculator💻
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send now the amount you want to calculate profits 📟
  keyboard: 
  aliases: 💻 calculator
CMD*/

/*CMD
  command: Calculator 💻
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Hello Send The Amount You Want Us To Calculate 💻*
  keyboard: 
  aliases: 
CMD*/

let msg = parseFloat(data.message);

let hourly = msg*0.0029167;
let daily = msg*0.07;
let profit = msg*0.4;

Bot.sendMessage("*💻 Profit Calculator 💻*\n\n⏳ Hourly Earnings : "+hourly.toFixed(8)+" 💸\n\n📆 Daily Earnings : "+daily.toFixed(8)+" 💸\n\nProfit After 20 Working Days 📉 : "+profit.toFixed(4)+" 💸\n\nInvestment Duration ⏳ : 20 Days / 480 Hours");

