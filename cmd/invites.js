const discord = require('discord.js'),
table = require('table'),
arraysort = require('array-sort');

module.exports = {
    name: 'invites',
    info: 'Get the leaderboard of invites, useful for rewards member',
    guildOnly: true,
    async execute(message, args) {
        let invites = await message.guild.fetchInvites().catch(() => {
            return message.channel.send('<:redtick:412529964945113100> **I don\'t have permission to view invites!**');
        });
        invites = invites.array();

        arraysort(invites, 'uses', { reverse: true });

        const possibleInvites = [['Username', 'Uses']];
        invites.forEach(invite => {
            possibleInvites.push([invite.inviter.username, invite.uses]);
        });

        if (possibleInvites.length > 10) possibleInvites.slice(1).slice(-10);

        const embed = new discord.RichEmbed()
            .setColor('AQUA')
            .setTitle('Server Invites')
            .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``)
        
        message.channel.send(embed);
    },
};