/*CMD
  command: auto_withdraw_ltc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send the amount you want to withdraw

Min: 0.01
  ANSWER
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: auto_withdraw_ltc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Send The Amount You Want To Withdraw
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("ltc");
let withdrawn = Libs.ResourcesLib.userRes("wdLtc");
let amount = parseFloat(data.message);
let wallet = User.getProperty("addressLtc");
if (wallet==undefined){
Bot.sendMessage("Please Set You're LTC Address To Withdraw");
}else{
if (amount>res.value() || amount<0.01){
Bot.sendMessage(" Please Check the Requirements to Withdraw ⁉⁉\n\n1.) You Should Have A Sufficient Balance \n\n2.) You Should Withdraw Above The Minimum Withdraw ")
}else{
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"ltc",
            address: wallet
},
  onSuccess: '/onWithdrawLtc'
}); 
res.remove(amount); 
withdrawn.add(amount); 
}
}

