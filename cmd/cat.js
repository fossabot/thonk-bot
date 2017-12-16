exports.run = (discord, client, message, args, rndCat) => {
    var url = rndCat.get();
        var embed = new discord.RichEmbed()
            .setColor('GREEN')
            .setAuthor('Random cats!', 'https://imageog.flaticon.com/icons/png/512/57/57104.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF')
            .setImage(url)
        message.channel.send(embed)

}