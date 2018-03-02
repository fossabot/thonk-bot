module.exports = {
  name: 'ping',
  info: 'ehh.. like the ping and then pong? hmmm',
  execute(message, args) { //eslint-disable-line no-unused-vars
      const then = Date.now();
    message.channel.send('ping? \:thinking:').then(m => { //eslint-disable-line no-useless-escape
      const time = Date.now() - then;
      m.edit(`:ping_pong: Pong! ${time}ms API Ping: ${Math.round(client.ping)}`); //eslint-disable-line no-undef
    });
  },
};