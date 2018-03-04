const db = require('quick.db');
exports.run = (client, member) => {
    
    //autorole
    db.fetch(`autoRole_${member.guild.id}`).then(i => {
        if (!i || i.toLowerCase() === 'none') return;
        else {
            try {
                member.addRole(member.guild.roles.find('name', i), 'Auto-role by Thonk Bot');
            } catch(e) {
                console.log('a guild tried to auto-role an ivalid role to someone!');
            }
        }
    });

    //welcome message plus dm
    db.fetch(`messageChannel_${member.guild.id}`).then(i => {
        db.fetch(`joinMessageDM_${member.guild.id}`).then(o => {
            //dm
            if(!o) console.log('a guild didn\'t set a join dm message!');
            else member.send(o.replace('{user}', member).replace('{members}', member.guild.memberCount).replace('{server}', member.guild.name));

            if(!member.guild.channels.get(i)) return console.log('a guild tries to set a invaild welcome/leave channel!');

            db.fetch(`joinMessage_${member.guild.id}`).then(p => {
                if (!p) return;
                else member.guild.channels.get(i).send(p.replace('{user}', member).replace('{members}', member.guild.memberCount).replace('{server}', member.guild.name));
            });
        });
    });
};