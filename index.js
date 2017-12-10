const discord = require('discord.js'); //add discord.js idk
const client = new discord.Client();

client.on('message', (message) => {
    if(message.content == 'kys') {
      message.reply('Alright, thats really rude.');
    }
});

client.login('process.env.BOT_TOKEN'); //make the bot appear
