const request = require('superagent');
module.exports = {
    name: '8ball',
    aliases: ['8b'],
    args: true,
    usage: '<question>',
    info: 'ask question to 8ball!',
    async execute(message, args) {
        let toAsk = args.slice(0).join(" ");
        let encoded = encodeURIComponent(toAsk);
        let {body} = await request
        .get(`https://8ball.delegator.com/magic/JSON/${encoded}`)

        message.channel.send(`\:8ball: The 8ball replies you: **${body.magic.answer}**`)
    }
}