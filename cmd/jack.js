const jeff = require('jimp');
module.exports = {
    name: 'jack',
    info: 'pls don\'t photoshop me',
    usage: '[mention]',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const src = await jeff.read('./assets/template/jack.jpeg');
        let toChange = message.author.displayAvatarURL;
        if (message.mentions.users.first()) toChange = message.mentions.users.first().displayAvatarURL;
        if (args.slice(0).join(' ').startsWith('http')) toChange = args.slice(0).join(' ');
        const img = await jeff.read(toChange);
        message.channel.startTyping();
        img.resize(345, 258);
        src.composite(img, 458, 356)
            .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                message.channel.stopTyping();
                message.channel.send({ file: buffer, name:'jack.png' });
            });
    },
};