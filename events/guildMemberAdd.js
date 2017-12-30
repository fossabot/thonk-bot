exports.run = (client, member) => {
    const guild = member.guild;
    member.guild.channels.find('topic', '-welcome-channel-').send(`Hello ${member}! Welcome to **${guild.name}**`)
}