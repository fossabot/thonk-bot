// This is the place where the starboard system works
// YEY

const db = require('quick.db');
const discord = require('discord.js');
exports.run = (user, messageReaction) => {
    if (messageReaction.emoji.toString() !== '⭐') return; //tell the process fuck off if the reaction emoji is not we want
    console.log(user);
    db.fetch(`starboard_${messageReaction.message.guild.id}`).then(channel => { // Fetch guild
        if (!channel) return; //no channel
        if (!messageReaction.message.member.hasPermission('MANAGE_GUILD')) return messageReaction.message.channel.send('You need `MANAGE_GUILD` to star messages!').then(m => m.delete(5000));
        if (messageReaction.message.author.id === user.id) return messageReaction.message.channel.send('You can\'t star your own message').then(m => m.delete(5000));

        const embed = new discord.RichEmbed()
            .setColor('GOLD')
            .setTitle('Starboard')
            .setAuthor(messageReaction.message.author.tag, messageReaction.message.author.displayAvatarURL)
            .setDescription(messageReaction.message.content)
            .setFooter(`Starred by: ${user.tag}`, user.displayAvatarURL);

        if (messageReaction.message.attachments.first()) embed.setImage(messageReaction.message.attachments.first().url);

        messageReaction.message.guild.channels.get(channel).send(embed);
    });
};