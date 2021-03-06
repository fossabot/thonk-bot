const db = require('quick.db');
module.exports = {
    name: 'editcfg',
    info: 'Edit the bot\'s config, set the option as \'none\' to set the option as empty \nList of option available: \nlogChannel: Set the member log channel of the guild \nautoRole: Set the role that new member will be able to assign \nwelcomeText: Set the welcome message will be sent to the log channel of this guild \ndmText: Set the direct messages that will be sent to a new member of the guild\nleaveText: Set the leave message that will sent to the log channel of the guild\nmodChannel: Set a channel for display moderation log of the guild\nprefix: Change the prefix of the bot \nstarboard: Set a channel for logging starboard',
    usage: '<option> <value>',
    guildOnly: true,
    args: true,
    aliases: ['ecfg', 'editc'],
    execute (message, args) { //eslint-disable-line no-unused-vars
        if (!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.reply('you don\'t have permission to use this command!');
        switch (args[0].toLowerCase()) {
            case 'logchannel':
                let newChannel = args.slice(1).join(' ');
                if(!message.mentions.channels.first()) return message.channel.send('Please mention a channel!');
                if(newChannel === 'none') newChannel = '';
                    else newChannel = message.mentions.channels.first().id;
                db.set(`messageChannel_${message.guild.id}`, newChannel).then(i => { //eslint-disable-line no-unused-vars
                    message.channel.send(`**Successfully updated logging channel to ${message.mentions.channels.first()}**`);
                 });
                break;
            case 'autorole':
                let newRole = args.slice(1).join(' ');
                if(!newRole) return message.channel.send('Please provide a role to auto assign!');
                if(newRole === 'none') newRole = '';
                db.set(`autoRole_${message.guild.id}`, newRole).then(i => {
                    message.channel.send(`Successfully changed auto-role to: \`${i}\``);
                });
                break;
            case 'welcometext':
                let newWelcomeText = args.slice(1).join(' ');
                if(!newWelcomeText) return message.channel.send('Please provide a message!');
                if(newWelcomeText === 'none') newWelcomeText = '';
                db.set(`joinMessage_${message.guild.id}`, newWelcomeText).then(i => {
                    message.channel.send(`Successfully changed welcome text to: \`${i}\``);
                });
                break;
            case 'dmtext':
                let newDmText = args.slice(1).join(' ');
                if(!newDmText) return message.channel.send('Please provide a message!');
                if(newDmText === 'none') newDmText = '';
                db.set(`joinMessageDM_${message.guild.id}`, newDmText).then(i => {
                    message.channel.send(`Successfully changed welcome text to: \`${i}\``);
                });
                break;
            case 'leavetext':
                let newLeaveText = args.slice(1).join(' ');
                if(!newLeaveText) return message.channel.send('Please provide a message!');
                if(newLeaveText === 'none') newLeaveText = '';
                db.set(`leaveMessage_${message.guild.id}`, newLeaveText).then(i => {
                    message.channel.send(`Successfully changed leave text to: \`${i}\``);
                });
                break;
            case 'modchannel':
                let newModChannel = args.slice(1).join(' ');
                if(!message.mentions.channels.first()) return message.channel.send('Please mention a channel!');
                if(newModChannel === 'none') newModChannel = '';
                    else newModChannel = message.mentions.channels.first().id;
                db.set(`modChannel_${message.guild.id}`, newModChannel).then(i => { //eslint-disable-line no-unused-vars
                    message.channel.send(`**Successfully updated moderation logging channel to ${message.mentions.channels.first()}**`);
                });
                break;
            case 'prefix':
                const newPrefix = args.slice(1).join(' ');
                if (!newPrefix) return message.channel.send('Please provide a prefix to change!');
                db.set(`prefix_${message.guild.id}`, newPrefix).then(() => {
                    message.channel.send(`Successfully updated bot\'s prefix to ${newPrefix}`);
                });
                break;
            case 'starboard':
                let newsb = args.slice(1).join(' ');
                if(!message.mentions.channels.first()) return message.channel.send('Please mention a channel!');
                if(newsb === 'none') newsb = '';
                    else newsb = message.mentions.channels.first().id;
                db.set(`starboard_${message.guild.id}`, newsb).then(i => { //eslint-disable-line no-unused-vars
                    message.channel.send(`**Successfully updated starboard channel to ${message.mentions.channels.first()}**`);
                 });
                break;
            default:
                message.channel.send('Please provide a option!\n**-----**\nList of option available: \nlogChannel: Set the member log channel of the guild \nautoRole: Set the role that new member will be able to assign \nwelcomeText: Set the welcome message will be sent to the log channel of this guild \ndmText: Set the direct messages that will be sent to a new member of the guild\nleaveText: Set the leave message that will sent to the log channel of the guild\nmodChannel: Set a channel for display moderation log of the guild\nprefix: Change the prefix of the bot \nstarboard: Set a channel for logging starboard');
                break;
        }
    },
};