const request = require('superagent');
module.exports = {
  name: 'eval',
  info: 'executes javascript code',
  usage: '<code>',
  args: true,
  ownerOnly: true,
  async execute(message, args) {
    const clean = text => {
      if (typeof text === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
          return text;
    };
    try {
      const code = args.join(' ');
      let evaled = eval(code);

      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);
      if (clean(evaled).length > 2000) {
        const { body } = await request
        .post('https://hastebin.com/documents')
        .send(clean(evaled));

        message.channel.send(`Since the result is over 2000 letters long, I have posted the result to hastebin! https://hastebin.com/${body.key}.js`);
        return;
      }
      message.channel.send(clean(evaled), { code:'xl' });
    } catch (err) {
      message.channel.send(`\<:redtick:412529964945113100> **Error!** \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  },
};