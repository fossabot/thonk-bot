const db = require('quick.db')
module.exports = {
    name: 'editcfg',
    info: 'Edit the bot\'s config, set the option as \'none\' to set the option as empty \nList of option available: \nlogChannel: Set the member log channel of the guild \nautoRole: Set the role that new member will be able to assign \nwelcomeText: Set the welcome message will be sent to the log channel of this guild \ndmText: Set the direct messages that will be sent to a new member of the guild\nleaveText: Set the leave message that will sent to the log channel of the guild\nmodChannel: Set a channel for display moderation log of the guild\nresponse: Toggle bot\'s responses\nNote that option is __**CASE SENSITIVE**__',
    usage: '<option> <value>',
    guildOnly: true,
    args: true,
    aliases: ['ecfg', 'editc'],
    execute (message, args){
        if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply('you don\'t have permission to use this command!')
        switch (args[0]) {
            case "logChannel":
                let newChannel = args.slice(1).join(" ")
                if(!message.mentions.channels.first()) return message.channel.send('Please mention a channel!')
                if(newChannel === 'none') newChannel = ''
                    else newChannel = message.mentions.channels.first().id;
                db.updateText(`messageChannel_${message.guild.id}`, newChannel).then(i => {
                    message.channel.send(`**Successfully updated logging channel to ${message.mentions.channels.first()}**`)
                 })
                break
            case "autoRole":
                let newRole = args.slice(1).join(" ");
                if(!newRole) return message.channel.send('Please provide a role to auto assign!')
                if(newRole === 'none') newRole = ''
                db.updateText(`autoRole_${message.guild.id}`, newRole).then(i => {
                    message.channel.send(`Successfully changed auto-role to: \`${i.text}\``)
                })
                break
            case "welcomeText":
                let newWelcomeText = args.slice(1).join(" ");
                if(!newWelcomeText) return message.channel.send('Please provide a message!')
                if(newWelcomeText === 'none') newWelcomeText = ''
                db.updateText(`joinMessage_${message.guild.id}`, newWelcomeText).then(i => {
                    message.channel.send(`Successfully changed welcome text to: \`${i.text}\``)
                })
                break
            case "dmText":
                let newDmText = args.slice(1).join(" ");
                if(!newDmText) return message.channel.send('Please provide a message!')
                if(newDmText === 'none') newDmText = ''
                db.updateText(`joinMessageDM_${message.guild.id}`, newDmText).then(i => {
                    message.channel.send(`Successfully changed welcome text to: \`${i.text}\``)
                })
                break
            case "leaveText":
                let newLeaveText = args.slice(1).join(" ");
                if(!newLeaveText) return message.channel.send('Please provide a message!')
                if(newLeaveText === 'none') newLeaveText = ''
                db.updateText(`leaveMessage_${message.guild.id}`, newLeaveText).then(i => {
                    message.channel.send(`Successfully changed welcome text to: \`${i.text}\``)
                })
                break
            case "modChannel":
                let newModChannel = args.slice(1).join(" ")
                if(!message.mentions.channels.first()) return message.channel.send('Please mention a channel!')
                if(newModChannel === 'none') newModChannel = ''
                    else newModChannel = message.mentions.channels.first().id;
                db.updateText(`modChannel_${message.guild.id}`, newModChannel).then(i => {
                    message.channel.send(`**Successfully updated moderation logging channel to ${message.mentions.channels.first()}**`)
                }) 
                break
            case "response":
                db.fetchObject(`response_${message.guild.id}`).then(i => {
                    if(i.text === 'FALSE' || !i.text) { //for first-time guild
                        db.updateText(`response_${message.guild.id}`, 'TRUE')
                        message.channel.send(`**Successfully updated bot\'s response to on**`)
                    } else if (i.text === 'TRUE') {
                        db.updateText(`response_${message.guild.id}`, 'FALSE')
                        message.channel.send(`**Successfully updated bot\'s response to off**`)
                    }
                })
                break
            default:
                message.channel.send('Please provide a option!\n**-----**\nList of option available: \nlogChannel: Set the member log channel of the guild \nautoRole: Set the role that new member will be able to assign \nwelcomeText: Set the welcome message will be sent to the log channel of this guild \ndmText: Set the direct messages that will be sent to a new member of the guild\nleaveText: Set the leave message that will sent to the log channel of the guild\nmodChannel: Set a channel for display moderation log of the guild\nresponse: Toggle bot\'s responses\nNote that option is __**CASE SENSITIVE**__')
                break
        }
    }
}