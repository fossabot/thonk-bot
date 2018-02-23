const jeff = require('jimp');
module.exports = {
    name: 'emergency',
    info: 'you have a emergency alert!',
    usage: '<text>',
    args: true,
    aliases: ['alert'],
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const src = await jeff.read('./assets/template/iphone.jpg');
        const text = args.slice(0).join(' ');
        message.channel.startTyping();
        jeff.loadFont(jeff.FONT_SANS_32_BLACK).then(font => {
            src.print(font, 45, 525, text)
                .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                    message.channel.stopTyping();
                    message.channel.send({ file: buffer, name: 'sonic.png' });
                });
        });
    },
};