/*CMD
  command: auto_withdraw_doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send now the amount yiu want to withdraw

Minimum: 75
  ANSWER
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: auto_withdraw_doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Send The Amount You Want To Withdraw
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
let withdrawn = Libs.ResourcesLib.userRes("withdrawn");
let amount = parseFloat(data.message);
let wallet = User.getProperty("addressDoge");
if (wallet==undefined){
Bot.sendMessage("Please Set You're Dogecoin Address To Withdraw");
}else{
if (amount>res.value() || amount<75){
Bot.sendMessage(" Please Check the Requirements to Withdraw ⁉⁉\n\n1.) You Should Have A Sufficient Balance \n\n2.) You Should Withdraw Above The Minimum Withdraw ")
}else{
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"DOGE",
            address: wallet
},
  onSuccess: '/onWithdrawDoge'
}); 

res.remove(amount); 
withdrawn.add(amount); 
}
}

