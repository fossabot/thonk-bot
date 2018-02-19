const request = require('superagent');
module.exports = {
    name: 'cat',
    info: '\:cat:', //eslint-disable-line no-useless-escape
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const { body } = await request
        .get('http://random.cat/meow');
        message.channel.send({ file: body.file });
    },
};