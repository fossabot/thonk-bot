const jeff = require('jimp');
module.exports = {
    name: 'sonicsays',
    args: true,
    usage: '<text>',
    aliases: ['sonic'],
    async execute(message, args) {
        message.channel.startTyping();
        const src = await jeff.read('https://i.imgur.com/7uIZ9Eo.png');
        const text = args.slice(0).join(' ');
        if (text.length > 15) return message.channel.send('The message is too long!');
        jeff.loadFont(jeff.FONT_SANS_64_BLACK).then(font => {
            src.print(font, 40, 104, text)
                .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                    message.channel.stopTyping();
                    message.channel.send({ file: buffer, name: 'sonic.png' });
                });
        });
    },
};