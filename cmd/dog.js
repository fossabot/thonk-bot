const request = require('superagent');
module.exports = {
    name: 'dog',
    info: '\:dog2:',
    async execute(message, args) {
        let {body} = await request
        .get(`http://random.dog/woof.json`)
        message.channel.send({file: body.url})
    }
}