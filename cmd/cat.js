const request = require('superagent');
module.exports = {
    name: 'cat',
    info: '\:cat:',
    async execute(message, args) {
        let {body} = await request
        .get(`http://random.cat/meow`)
        message.channel.send({file: body.file})
    }
}