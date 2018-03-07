const moment = require('moment');
const discord = require('discord.js');
const config = require('../cfg/config');
require('moment-duration-format');
module.exports = {
    name: 'info',
    info: 'shows the information about the bot',
    execute (message, args) {
        const toSend = new discord.RichEmbed()
            .setAuthor(`${client.user.username}\'s stats`, client.user.displayAvatarURL)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
            .setColor('GOLD')
            .addField('🖥 Memory used', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField('🕒 Uptime', moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]'), true)
            .addField('👥 Servers', client.guilds.size, true)
            .addField('👤 Users', client.users.size, true)
            .addField('<:djs:420908530837618698> Discord.js version', `v${discord.version}`, true)
            .addField('<:node:420908711146684436> Node.js version', process.version, true)
            .addField('👑 Bot owner', client.users.find('id', config.ownerID).tag, true);
        message.channel.send(toSend);
    },
};