const discord = require('discord.js'),
    table = require('table'),
    db = require('quick.db'),
    config = require('../cfg/config');

module.exports = {
    name: 'moneyleaderboard',
    info: 'Check who\'s the richest!',
    aliases: ['moneylb'],
    async execute(message, args) {
        const balances = await db.startsWith('balance', { sort: '.data' });
        let possibleBalance = [['Username', 'Balance']];
        balances.forEach(bal => {
            const [plsignore, userieedee] = bal.ID.split('_');
            if (config.ownerID.includes(userieedee)) return;
            possibleBalance.push([client.users.get(userieedee).tag, bal.data]);
            if (possibleBalance.length > 10) possibleBalance.slice(1).slice(-10);
        });

        const embed = new discord.RichEmbed()
            .setColor('GREEN')
            .setTitle('Money Leaderboard')
            .addField('Leaderboard', `\`\`\`${table.table(possibleBalance)}\`\`\``);
        message.channel.send(embed);
    },
};