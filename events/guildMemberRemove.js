const db = require('quick.db');
exports.run = (client, member) => {
    db.fetch(`messageChannel_${member.guild.id}`).then(i => {
        if (!member.guild.channels.get(i)) return console.log('a guild still didn\'t fucking set a welcome / leave channel');
        db.fetch(`leaveMessage_${member.guild.id}`).then(o => {
            if (!o) console.log('GFDGFDGFDFGD');
            else member.guild.channels.get(i).send(o.replace('{user}', member.user.username).replace('{server}', member.guild.name).replace('{members}', member.guild.memberCount));
        });
    });
};