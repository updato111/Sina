/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📥deposit, ➕add funds
CMD*/

/*CMD
  command: Deposit 📥
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "eth" },
{ title : "LTC" , command : "ltc"}],
[{ title : "BTC" , command : "btc"},
{ title : "BCH" , command : "bch"}],
[{ title : "DOGE" , command : "doge" }],
[{ title : "Home 🏠" , command : "back delete"}]
]
Bot.sendInlineKeyboard(button, "Please Choose The Currency You Want to Deposit\n\n*For The Earnings Info 💹*\n\n📥 Minimum Invest : 100 DOGE , 0.02 LTC , 0.005 ETH , 0.0002 BTC , 0.002 BCH(or You're Decisions How much Is The Minimum Invest )\n\n♻️ Minimum Re-Invest : 100 DOGE , 0.02 LTC , 0.005 ETH , 0.0002 BTC , 0.002 BCH( or You're Decision How Much Is the minimum Re-Invest)\n\n Daily Earnings  : 7% of Your Investment 📉\n\n Hourly Earnings : 0.292% of Your Investment 📈\n\n Duration Of Investment : 20 Working Days 📆\n\n Profit After Days : 40% Of You're Investment 💸",{on_result: "on_result"});

