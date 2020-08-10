/*CMD
  command: /setupnow
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: /setupnow
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: tell me your private key
  keyboard: 
  aliases: 
CMD*/

let publickey = User.getProperty("publickey");
let privatekey = User.getProperty("privateKey");
let bbtoken = User.getProperty("bbtoken");

Libs.CoinPayments.setPrivateKey(privatekey);
Libs.CoinPayments.setPublicKey(publickey);

Libs.CoinPayments.setBBApiKey('bbtoken');

Bot.sendMessage("setup done")



