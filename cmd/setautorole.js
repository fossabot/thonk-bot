const db = require("quick.db")
module.exports = {
    name: "setautorole",
    info: "Set a role that will auto assign the role to a new member",
    args: true,
    usage: '<role to autorole>',
    aliases:['sar', 'autorole', 'arole'],
    execute(message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You don\'t have permission to run this command!")
        db.updateText(`autoRole_${message.guild.id}`, args.join(" ".trim())).then(i => {
            message.channel.send(`Successfully changed auto-role to: \`${i.text}\``)
        })
    }
}