/*CMD
  command: /setupbb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Tell me your bb token
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: /setpublickey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: tell me your public key
  keyboard: 
  aliases: 
CMD*/

let bbtoken = data.message;
User.setProperty("bbtoken", data.message, "string");
Bot.runCommand("/setupnow")

