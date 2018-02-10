const db = require("quick.db")
exports.run = (client, member) => {
    
    //autorole
    db.fetchObject(`autoRole_${member.guild.id}`).then(i => {
        if(!i.text || i.text.toLowerCase() === "none") return;
        else {
            try {
                member.addRole(member.guild.roles.find('name', i.text), 'Auto-role by Hitler Bot')
            } catch(e){
                console.log("a guild tried to auto-role an ivalid role to someone!")
            }
        }
    })

    //welcome message plus dm
    db.fetchObject(`messageChannel_${member.guild.id}`).then(i => {
        db.fetchObject(`joinMessageDM_${member.guild.id}`).then(o => {
            //dm
            if(!o.text) console.log('a guild didn\'t set a join dm message!')
            else member.send(o.text.replace('{user}', member).replace('{members}', member.guild.memberCount).replace('{server}', member.guild.name))

            if(!member.guild.channels.get(i.text)) return console.log('a guild tries to set a invaild welcome/leave channel!')

            db.fetchObject(`joinMessage_${member.guild.id}`).then(p => {
                if (!p.text) return console.log(`a fucking guild didn\'t set their join message wtff?!?!?!@?1`)
                else member.guild.channels.get(i.text).send(p.text.replace('{user}', member).replace('{members}', member.guild.memberCount).replace('{server}', member.guild.name))
            })
        })
    })
}