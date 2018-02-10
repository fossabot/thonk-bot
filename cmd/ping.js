const discord = require('discord.js')
module.exports = {
  name: 'ping',
  info: 'ehh.. like the ping and then pong? hmmm',
  execute(message, args) {
    let option = args[0]
    if (!args.length) {
      const then = Date.now();
    message.channel.send('ping? \:thinking:').then(m => {
      var time = Date.now() - then
      m.edit(`:ping_pong: Pong! ${time}ms API Ping: ${client.ping}`)
})
  }
  }
}