
module.exports = {
  name: "eval",
  info: "eval a code (BOT\'S OWNER ONLY)",
  args: true,
  execute(message, args) {
    if(message.author.id !== config.ownerID) return message.reply('you don\'t have permission to use this command!');
    try {
    const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
    }
      const code = args.join("/ +/");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
}