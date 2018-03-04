const db = require('quick.db');
const discord = require('discord.js');
module.exports = {
    name: 'money',
    info: 'Show the balance of your wallet',
    aliases: ['bal', 'balance'],
    usage: '[@user]',
    execute(message, args) { //eslint-disable-line no-unused-vars
        const toCheck = message.guild.member(message.mentions.users.first());
        if (toCheck) {
            db.fetch(`balance_${toCheck.user.id}`).then(o => { //eslint-disable-line no-unused-vars
                let bal = o; //eslint-disable-line no-unused-vars
                if (o === null) bal = 0;
                const what = new discord.RichEmbed()
                .setDescription(`\:moneybag: **${toCheck.user.username}\'s balance**: $${o}`) //eslint-disable-line no-useless-escape
                .setColor('GREEN')
                .setFooter(client.user.username, client.user.displayAvatarURL); //eslint-disable-line no-undef
                message.channel.send(what);
            });
            return;
        } else {
        db.fetch(`balance_${message.author.id}`).then(i => {
            let bal = i;
            if (bal == null) bal = '0';
                    const embed = new discord.RichEmbed()
                    .setDescription(`\:moneybag: **Balance**: $${bal}`) //eslint-disable-line no-useless-escape
                    .setColor('GREEN')
                    .setFooter(client.user.username, client.user.displayAvatarURL); //eslint-disable-line no-undef
                    message.channel.send(embed);
        });
    }
    },
};