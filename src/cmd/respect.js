const jeff = require('jimp');
module.exports = {
    name: 'respect',
    info: 'Press F to give respect',
    usage: '[mention]',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const src = await jeff.read('./assets/template/f.jpeg');
        message.channel.startTyping();
        let toChange = message.author.displayAvatarURL;
        if (args.slice(0).join(' ').startsWith('http')) toChange = args.slice(0).join(' ');
        if (message.mentions.users.first()) toChange = message.mentions.users.first().displayAvatarURL;
        const img = await jeff.read(toChange);
        img.resize(69, 92);
        src.composite(img, 263, 62)
            .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                message.channel.stopTyping();
                 message.channel.send({ file: buffer, name:'pressftogiverespect.png' }).then(m => {
                     m.react('🇫'); //pls f
                 });
            });
    },
};