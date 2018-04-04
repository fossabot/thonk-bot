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
        const possibleBalance = [['Username', 'Balance']];
        balances.forEach(bal => {
            const [plsignore, userieedee] = bal.ID.split('_');
            if (config.ownerID.includes(userieedee) || !client.users.get(userieedee)) return;
            const tag = client.users.get(userieedee).username;
            possibleBalance.push([tag, bal.data]);
            if (possibleBalance.length > 5) possibleBalance.slice(1).slice(-5);
        });
        if (possibleBalance.length > 5) {
            const sliced = possibleBalance.splice(0, 6);
            const embed = new discord.RichEmbed()
            .setColor('GREEN')
            .setTitle('Money Leaderboard')
            .addField('Leaderboard', `\`\`\`${table.table(sliced)}\`\`\``);
            message.channel.send(embed);
            return;
        }
        const embed = new discord.RichEmbed()
            .setColor('GREEN')
            .setTitle('Money Leaderboard')
            .addField('Leaderboard', `\`\`\`${table.table(possibleBalance)}\`\`\``);
        message.channel.send(embed);
    },
};