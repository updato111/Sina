/*CMD
  command: /walletDoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: /walletDoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));

let wallet = options.result;
Bot.sendMessage("💸 Deposit Address Created 💸\n\nDeposit Address : \n `"+wallet.address+"`\n(This Deposit Address Is You're Own Personal Deposit Address)\n\nAddress Label : "+wallet.label);

// You can save wallet
User.setProperty("walletDoge", wallet.address, "string");
User.setProperty("label", wallet.label,"string");

