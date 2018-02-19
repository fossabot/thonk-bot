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
            db.fetchObject(`balance_${toCheck.user.id}`).then(o => { //eslint-disable-line no-unused-vars
                const what = new discord.RichEmbed()
                .setDescription('\:moneybag: **${toCheck.user.username}\'s balance**: $${o.value}') //eslint-disable-line no-useless-escape
                .setColor('GREEN')
                .setFooter('thonking bot', 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png');
                message.channel.send(what);
            });
            return;
        }
        db.fetchObject(`balance_${message.author.id}`).then(i => {
            let bal;
            if (i.value === null) { 
                db.updateValue(`balance_${message.author.id}`, 1000).then(o => {
                    bal = o.value;
                });
            }
                else bal = i.value; //eslint-disable-line curly
                    const embed = new discord.RichEmbed()
                    .setDescription(`\:moneybag: **Balance**: $${bal}`) //eslint-disable-line no-useless-escape
                    .setColor('GREEN')
                    .setFooter('thonking bot', 'https://cdn.discordapp.com/avatars/412516192406732811/8519f2784c94a9664390a68ef1a4c3d7.png');
                    message.channel.send(embed);
                

        });
    },
};