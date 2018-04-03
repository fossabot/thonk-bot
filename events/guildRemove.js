const config = require('../cfg/config.js');
const db = require('quick.db');
exports.run = (client, guild) => {
    console.log(`${guild.name} dont know how to think`);
    client.user.setPresence(`on ${client.guilds.size} guilds | ${config.prefix}.help`, { type: 'WATCHING' });
    db.delete(`messageChannel_${guild.id}`);
    db.delete(`joinMessageDM_${guild.id}`);
    db.delete(`joinMessage_${guild.id}`);
    db.delete(`leaveMessage_${guild.id}`);
    db.delete(`autoRole_${guild.id}`);
    db.delete(`modChannel_${guild.id}`);
    db.delete(`prefix_${guild.id}`);
    db.delete(`starboardchannel_${guild.id}`);
};