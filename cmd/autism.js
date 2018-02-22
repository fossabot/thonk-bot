const jeff = require('jimp');
module.exports = {
    name: 'autism',
    usage: '[mention]',
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const src = await jeff.read('./assets/template/autism.png');
        let toChange = message.author.displayAvatarURL;
        if (message.mentions.users.first()) toChange = message.mentions.users.first().displayAvatarURL;
        const img = await jeff.read(toChange);
        message.channel.startTyping();
        img.resize(498, 284);
        src.composite(img, 1, 16)
            .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                message.channel.stopTyping();
                message.channel.send({ file: buffer, name:'autism.png' });
            });
    },
};