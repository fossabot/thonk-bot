const discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: 'config',
    info: 'View the bot\'s config',
    guildOnly: true,
    usage: '<option to change> <value>',
    aliases: ['cfg'],
    execute(message, args) { //eslint-disable-line no-unused-vars
        let channel;
        let dmText;
        let joinText;
        let leaveText;
        let autoRole;
        let modChannel;
        let responseToggle;
        let prefix;
        //woah look at this mess
            db.fetchObject(`messageChannel_${message.guild.id}`).then(channelIDFetched => {
                if (!message.guild.channels.get(channelIDFetched.text)) channel = '*none*';
                else channel = message.guild.channels.get(channelIDFetched.text);
                db.fetchObject(`joinMessageDM_${message.guild.id}`).then(joinDMFetched => {
                    if (!joinDMFetched.text) dmText = '*none*';
                    else dmText = joinDMFetched.text;
                    db.fetchObject(`joinMessage_${message.guild.id}`).then(joinTextFetched => {
                        if (!joinTextFetched.text) joinText = '*none*';
                        else joinText = joinTextFetched.text;
                        db.fetchObject(`leaveMessage_${message.guild.id}`).then(leaveTextFetched => {
                            if (!leaveTextFetched.text) leaveText = '*none*';
                            else leaveText = leaveTextFetched.text;
                                db.fetchObject(`autoRole_${message.guild.id}`).then(autoRoleFetched => {
                                    if(!autoRoleFetched.text) autoRole = '*none*';
                                    else autoRole = autoRoleFetched.text;
                                    db.fetchObject(`modChannel_${message.guild.id}`).then(modChannIDFetched => {
                                        if(!modChannIDFetched.text) modChannel = '*none*';
                                        else modChannel = message.guild.channels.get(modChannIDFetched.text);
                                        db.fetchObject(`response_${message.guild.id}`).then(responseToggleFetched => {
                                            if (!responseToggleFetched.text || responseToggleFetched.text === 'off' || responseToggleFetched.text === 'false') responseToggle = '*false*';
                                                else responseToggle = responseToggleFetched.text;
                                            db.fetchObject(`prefix_${message.guild.id}`).then(prefixFetched => {
                                                if (!prefixFetched.text || prefixFetched.text === 't.') prefix = '*t.*';
                                                else prefix = prefixFetched.text;
                                                let response = `**Member Logging Channel**\n > ${channel}\n\n` ;
                                                response += `**Moderation Logging Channel**\n > ${modChannel}\n\n`;
                                                response += `**Welcome DM Text**\n > ${dmText}\n\n` ;
                                                response += `**Welcome Text**\n > ${joinText}\n\n` ;
                                                response += `**Leave Channel Text**\n > ${leaveText}\n\n` ;
                                                response += `**Auto role**\n > ${autoRole}\n\n`;
                                                response += `**Dumb responses**\n > ${responseToggle}\n\n`;
                                                response += `**Prefix**\n > ${prefix}`;
                                                const embed = new discord.RichEmbed()
                                                    .setDescription(response)
                                                    .setColor('RANDOM');
                                                message.channel.send(embed);
                                            });
                                        });
                                    });

                                });
                        });
                    });
        
                });
        
            });

    },
};