/*CMD
  command: on_check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: on_Check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "check_eth" },
{ title : "LTC" , command : "check_ltc"}],
[{ title : "BTC" , command : "check_btc"},
{ title : "BCH" , command : "check_bch"}],
[{ title : "DOGE" , command : "check_doge" }],
[{ title : "Back To Panel" , command : "panel delete"}]
]
if (user.username=="Hexadev07"){
Bot.sendInlineKeyboard(button , "Hello Admin Choose A Currency Balance You Want to Check From A User", {on_result : "admng"})

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}

