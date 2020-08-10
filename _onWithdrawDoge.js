/*CMD
  command: /onWithdrawDoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: /onWithdrawBch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options)); 
let result = options.body.result;

Bot.sendMessage("Withdrawal Request Sent ✅ \n\nPlease allow 1 hour for payment to be processed automatically\n\nRequest ID : \n"+result.id);

