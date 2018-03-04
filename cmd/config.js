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
        let prefix;
        //woah look at this mess
            db.fetch(`messageChannel_${message.guild.id}`).then(channelIDFetched => {
                if (!message.guild.channels.get(channelIDFetched)) channel = '*none*';
                else channel = message.guild.channels.get(channelIDFetched);
                db.fetch(`joinMessageDM_${message.guild.id}`).then(joinDMFetched => {
                    if (!joinDMFetched) dmText = '*none*';
                    else dmText = joinDMFetched;
                    db.fetch(`joinMessage_${message.guild.id}`).then(joinTextFetched => {
                        if (!joinTextFetched) joinText = '*none*';
                        else joinText = joinTextFetched;
                        db.fetch(`leaveMessage_${message.guild.id}`).then(leaveTextFetched => {
                            if (!leaveTextFetched) leaveText = '*none*';
                            else leaveText = leaveTextFetched;
                                db.fetch(`autoRole_${message.guild.id}`).then(autoRoleFetched => {
                                    if(!autoRoleFetched) autoRole = '*none*';
                                    else autoRole = autoRoleFetched;
                                    db.fetch(`modChannel_${message.guild.id}`).then(modChannIDFetched => {
                                        if(!modChannIDFetched) modChannel = '*none*';
                                        else modChannel = message.guild.channels.get(modChannIDFetched);
                                            db.fetch(`prefix_${message.guild.id}`).then(prefixFetched => {
                                                if (!prefixFetched || prefixFetched === 't.') prefix = '*t.*';
                                                else prefix = prefixFetched;
                                                const embed = new discord.RichEmbed()
                                                    .addField('Prefix', prefix, true)
                                                    .addField('Member Logging Channel', channel, true)
                                                    .addField('Join DM Message', dmText, true)
                                                    .addField('Join Message', joinText, true)
                                                    .addField('Leave Message', leaveText, true)
                                                    .addField('Auto Role', autoRole, true)
                                                    .addField('Moderation Logging Channel', modChannel, true)
                                                    .setColor('RANDOM')
                                                    .setTitle('Config')
                                                    .setFooter(client.user.username, client.user.displayAvatarURL); //eslint-disable-line no-undef
                                                message.channel.send(embed);
                                            });
                                    });

                                });
                        });
                    });
        
                });
        
            });

    },
};