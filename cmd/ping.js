exports.run = (discord, client, message, args) => {
    const then = Date.now();
    message.channel.send('pinging...').then(m => {
      var time = Date.now() - then
      m.edit('Hi im alive! Took ' + '`' + time + 'ms`' + ' to ping.')
})
}