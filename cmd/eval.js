module.exports = {
  name: 'eval',
  info: 'executes javascript code',
  usage: '<code>',
  args: true,
  ownerOnly: true,
  execute(message, args) {
    try {
    const clean = text => {
            if (typeof(text) === 'string') //eslint-disable-line
              return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
            else return text; //eslint-disable-line
    };
      const code = args.join('/ +/');
      let evaled = eval(code);

      if (typeof evaled !== 'string') {evaled = require('util').inspect(evaled)} //eslint-disable-line

      message.channel.send(clean(evaled), { code:'xl' });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``); //eslint-disable-line
    }
  },
};