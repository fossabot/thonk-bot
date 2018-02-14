const discord = require('discord.js')
const client = new discord.Client();
const db = require('quick.db')
module.exports = {
    name: "mute",
    info: "mute a mentioned user",
    usage: "<mentioned user> [reason]",
    guildOnly: true,
    args: true,
    async execute(message, args) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('you don\'t have permission to use this command!')
        let toMute = message.guild.member(message.mentions.users.first());
        let reason = args.slice(1).join(' ')
        if (toMute === message.author.id) return message.reply('why you\'re trying to mute yourself?')
        if (toMute.highestRole.position >= message.member.highestRole.position) return message.reply('you can\'t mute a member who is higher or has the same role as you!')
        
        let role = message.guild.roles.find(r => r.name === "h.mute");
        if(!role) { //add a mute role if there's no role in server
            try {
                role = await message.guild.createRole({
                    name: "thonk mute",
                    color: "#151515",
                    permission:[]
                })
    
                message.guild.channels.forEach (async (channel, id) => { //add permission for each channel
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                })
            })
        } catch(e) {
            console.log(e.stack)
        }
    }
    
    if (toMute.roles.has(role.id)) return message.reply('this user is already muted!')
    if (!reason) reason = 'The executor didn\'t provide a reason!'
    toMute.addRole(role, reason);
    message.reply(`${toMute} is muted!`)
    var embed = new discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle('A member is muted!')
        .setDescription(`\n **Username**: ${toMute} \n**Reason**: ${reason}`)
        .setColor('GREY')
    db.fetchObject(`modChannel_${message.guild.id}`).then(i => {
            if (!i || i === 'none') return console.log('a guild didn\'t set a moderation chaheane')
            message.guild.channels.get(i.text).send(embed)
    })
    }

}