const config = require('../cfg/config.js');
module.exports = {
    name: 'help',
    info: 'go help other not you',
    aliases: ['commands', 'cmds'],
    execute(message, args) {
        const { commands } = message.client;
        const data = [];
        const command = commands.get(args[0]); //eslint-disable-line no-unused-vars
        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', ')); //eslint-disable-line no-shadow
            data.push(`\nYou can send \`${config.prefix}help [command name]\` to get info on a specific command!`);
        } else {
            if (!commands.has(args[0])) {
                return message.reply('that\'s not a valid command!');
            }
            
            const command = commands.get(args[0]); //eslint-disable-line no-shadow
            
            data.push(`**Name:** ${command.name}`);
            
            if (command.info) data.push(`**Description:** ${command.info}`);
            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.usage) data.push(`**Usage:** ${config.prefix}${command.name} ${command.usage}`);
            
            if (command.args) { data.push('**Need argument**'); }
            if (command.ownerOnly) data.push('__**This command is bot owner only!**__');
        }
        message.author.send(data, { split: true }).then(() => {
            if (message.channel.type !== 'dm') {
                message.channel.send(`${message.author}, I sent you a telegram.`);
            }
        }).catch(() => message.reply('it seems like I can\'t DM you!'));
    },
};