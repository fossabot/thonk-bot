const request = require('superagent');
module.exports = {
    name: 'joke',
    info: 'HAHAHAHAH SO FUNNY HFAHFJFHH',
    async execute(message, args) {
        let {body} = await request
        .get(`https://icanhazdadjoke.com/`)
        .set(`Accept`, `application/json`)
        
        if (body.status === 200) message.channel.send(body.joke)
            else message.channel.send('Something went wrong! :(')
    }
}