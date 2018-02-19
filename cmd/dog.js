const request = require('superagent');
module.exports = {
    name: 'dog',
    info: '\:dog2:', //eslint-disable-line no-useless-escape
    async execute(message, args) { //eslint-disable-line no-unused-vars
        const { body } = await request
        .get('http://random.dog/woof.json');
        message.channel.send({ file: body.url });
    },
};