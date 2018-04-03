const discord = require('discord.js'),
    table = require('table'),
    db = require('quick.db');

module.exports = {
    name: 'moneyleaderboard',
    info: 'Check who\'s the richest!',
    async execute(message, args) {
        const balances = await db.startsWith('balance', { sort: '.data' });
        let possibleBalance = [['Username', 'Balance']];
        balances.forEach(bal => {
            const [plsignore, userieedee] = bal.ID.split('_');
            possibleBalance.push([client.users.get(userieedee).tag, bal.data]);
        });

        const embed = new discord.RichEmbed()
            .setColor('GREEN')
            .setTitle('Money Leaderboard')
            .addField('Leaderboard', `\`\`\`${table.table(possibleBalance)}\`\`\``);
        message.channel.send(embed);
    },
};