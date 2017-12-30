const discord = require('discord.js')
const client = new discord.Client();
module.exports = {
    name: "mute",
    info: "mute a mentioned user",
    usage: "h.mute <mentioned user> [reason]",
    guildOnly: true,
    args: true,
    async execute(message, args) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('you don\'t have permission to use this command!')
        let toMute = message.guild.member(message.mentions.users.first());
        let reason = args.slice(1).join(' ')
        if (!toMute) return message.reply('you did\'t specify a user to mute!')
        if (toMute === message.author.id) return message.reply('why you\'re trying to mute yourself?')
        if (toMute.highestRole.position >= message.member.highestRole.position) return message.reply('you can\'t mute a member who is higher or has the same role as you!')
        
        let role = message.guild.roles.find(r => r.name === "h.mute");
        if(!role) { //add a mute role if there's no role in server
            try {
                role = await message.guild.createRole({
                    name: "h.mute",
                    color: "#000000",
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
    if (!message.guild.channels.find('topic', '-mod-log-')) return message.reply('Seems there\'s no mod log channel, I recommend you add a mod-log by adding `-mod-log-` as topic in your decided channel')
    var embed = new discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle('A member is muted!')
        .setDescription(`\n **Username**: ${toMute} \n**Reason**: ${reason}`)
        .setColor('GREY')
    message.guild.channels.find('topic', '-mod-log-').send(embed)
    }

}