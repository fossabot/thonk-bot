const db = require("quick.db")
exports.run = (client, member) => {
    
    //autorole
    db.fetchObject(`autoRole_${member.guild.id}`).then(i => {
        if(!i.text || i.text.toLowerCase() === "none") return;
        else {
            try {
                member.addRole(member.guild.roles.find('name', i.text))
            } catch(e){
                console.log("a guild tried to auto-role an ivalid role to someone!")
            }
        }
    })
}