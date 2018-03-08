const db = require('quick.db');
const discord = require('discord.js');
module.exports = {
    name: 'changelogs',
    info: 'See the bot\'s changes!',
    execute(message) {
        db.fetch('changelogs').then(logs => {
            let response;
            if (!logs.length) response = '**No changes for now!**';
            else if (logs.length > 5) {
                const editedlogs = logs.slice(1).slice(-5);
                for (let i = 0; i < editedlogs.length; i++) {
                    response += `**${i + 1}.** \`${editedlogs[i]}\` \n\n`;
                }
            } else {
                for (let i = 0; i < logs.length; i++) {
                    response += `**${i + 1}.** \`${logs[i]}\` \n\n`;
                }
            }
            const embed = new discord.RichEmbed()
                .setAuthor(`${client.user.username} changelogs`, client.user.displayAvatarURL)
                .setColor('RANDOM')
                .setDescription(response.replace('undefined', ''));
            message.channel.send(embed);
        });
    },
};