/*CMD
  command: Statistics 📊
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: Statistics 📊
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let total = Bot.getProperty("total")
var msg = ""
let totalEth = Bot.getProperty("totalEth")
let totalLtc = Bot.getProperty("totalLtc")
let totalBtc = Bot.getProperty("totalBtc")
let totalBch = Bot.getProperty("totalBch")

var st = data.statistics
let res = Libs.ResourcesLib.userRes("balance")

let eth = Libs.ResourcesLib.userRes("eth")
let ltc = Libs.ResourcesLib.userRes("ltc")
let btc = Libs.ResourcesLib.userRes("btc")
let bch = Libs.ResourcesLib.userRes("bch")

Bot.sendMessage(
  "*Total Members 👥 : *\n" +
    st.user_chats_count +
    "\n\n *Total Investment 💸 :* \nDOGE ~ " +
    total.value().toFixed(8) +
    " DOGE\nETH ~ " +
    totalEth.value().toFixed(8) +
    " ETH\nLTC ~ " +
    totalLtc.value().toFixed(8) +
    " LTC\nBTC ~ " +
    totalBtc.value().toFixed(8) +
    " BTC\nBCH ~ " +
    totalBch.value().toFixed(8) +
    ' BCH\n\n*Community 💬 :* "@cyptocredittchat" \n\n* Payment Channel 📮 : *"@cyptocredittreal'
)

