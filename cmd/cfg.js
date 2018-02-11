const discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'cfg',
    info: 'View the bot\'s config',
    guildOnly: true,
    usage: '<option to change> <value>',
    aliases: ['cfg', 'config'],
    execute(message, args) {
        let channel
        let dmText
        let joinText
        let leaveText
        let autoRole
        let modChannel
        let guildPrefix
        //woah look at this mess
            db.fetchObject(`messageChannel_${message.guild.id}`).then(channelIDFetched => {
                if (!message.guild.channels.get(channelIDFetched.text)) channel = '*none*'
                else channel = message.guild.channels.get(channelIDFetched.text)   
                db.fetchObject(`joinMessageDM_${message.guild.id}`).then(joinDMFetched => {
                    if (!joinDMFetched.text) dmText = '*none*'
                    else dmText = joinDMFetched.text
                    db.fetchObject(`joinMessage_${message.guild.id}`).then(joinTextFetched => {
                        if (!joinTextFetched.text) joinText = '*none*'
                        else joinText = joinTextFetched.text
                        db.fetchObject(`leaveMessage_${message.guild.id}`).then(leaveTextFetched => {
                            if (!leaveTextFetched.text) leaveText = '*none*'
                            else leaveText = leaveTextFetched.text
                                db.fetchObject(`autoRole_${message.guild.id}`).then(autoRoleFetched => {
                                    if(!autoRoleFetched.text) autoRole = '*none*'
                                    else autoRole = autoRoleFetched.text
                                    db.fetchObject(`modChannel_${message.guild.id}`).then(modChannIDFetched => {
                                        if(!modChannIDFetched.text) modChannel = '*none*'
                                        else modChannel = message.guild.channels.get(modChannIDFetched.text)
                                            let response = `**Member Logging Channel**\n > ${channel}\n\n` 
                                            response += `**Moderation Logging Channel**\n > ${modChannel}\n\n`
                                            response += `**Welcome DM Text**\n > ${dmText}\n\n` 
                                            response += `**Welcome Channel Text**\n > ${joinText}\n\n` 
                                            response += `**Leave Channel Text**\n > ${leaveText}\n\n` 
                                            response += `**Auto role**\n > ${autoRole}\n\n`
                                            var embed = new discord.RichEmbed()
                                                .setDescription(response)
                                                .setColor('RANDOM')
                                            message.channel.send(embed)
                                    })

                                })
                        })
                    })
        
                })
        
            })

    }
}