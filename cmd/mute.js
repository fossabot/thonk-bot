exports.run = async (discord, client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('you don\'t have permission to use this command!')
    let toMute = message.guild.member(message.mentions.users.first());
    if (!toMute) return message.reply('you did\'t specify a user to mute!')
    if (toMute === message.author.id) return message.reply('why you\'re trying to mute yourself?')
    if (toMute.highestRole.position >= message.member.highestRole.position) return message.reply('you can\'t mute a member who is higher or has the same role as you!')
    let role = message.guild.roles.find(r => r.name === "h.mute");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name: "h.mute",
                color: "#000000",
                permission:[]
            })

            message.guild.channels.forEach (async (channel, id) => {
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

toMute.addRole(role);
message.reply(`${toMute} is muted!`)
}