const jeff = require('jimp');
module.exports = {
    name: 'whodidthis',
    info: 'WHO DID THIS LOLOLOLO',
    usage: '[mention or url]',
    aliases: ['wdt'],
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const src = await jeff.read('./assets/template/who-did-this.png');
        let toChange = message.author.displayAvatarURL;
        if (message.mentions.users.first()) toChange = message.mentions.users.first().displayAvatarURL;
        if (args.slice(0).join(' ').startsWith('http')) toChange = args.slice(0).join(' ');
        const img = await jeff.read(toChange);
        img.resize(816, 667);
        message.channel.startTyping();
        src.composite(img, 32, 132)
            .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                message.channel.stopTyping();
                message.channel.send({ file: buffer, name:'whodidthis.png' });
            });
    },
};