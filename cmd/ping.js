const discord = require('discord.js')
const client = new discord.Client()
module.exports = {
  name: 'ping',
  info: 'ehh.. like the ping and then pong? hmmm',
  execute(message, args) {
    let option = args[0]
    if (!args.length) {
      const then = Date.now();
    message.channel.send('ping? \:thinking:').then(m => {
      var time = Date.now() - then
      m.edit(`:ping_pong: Pong! ${time}ms`)
})
    } else if (args[0] === 'cleverbot') {
      if (message.author.id !== config.ownerID) {
        message.reply("You don't have permission to use this command!");
        return;
      }
      message.reply("Are you sure? If you ping cleverbots while they're chatting the bots might be **broken**!!! (Reply yes to continue)").then(() => {
        message.channel.awaitMessages(response => response.content === 'yes', {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
        .then((collected) => {
            message.reply('pinged cleverbots');
            client.channels.get('391535408888020992').sendMessage('Hey.');
          })
        .catch(() => {
          message.reply('No response replied, operation aborted');
        });
      })
    }
  }
}