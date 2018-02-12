exports.run = (client, guild) => {
    console.log(`${guild.name} added thonk bot yey`)
    client.user.setPresence({game: {name: `on ${client.guilds.size} guilds | h.help`, type: 'WATCHING'}}); //updatet
}