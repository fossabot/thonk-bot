const { exec } = require('child_process');
module.exports = {
    name: 'exec',
    info: 'execute shell command',
    ownerOnly: true,
    args: true,
    usage: '<command>',
    execute(message, args) {
        exec(args.join(' '), (err, stdout, stderr) => {
            if (err) return message.channel.send(`<:redtick:412529964945113100> **lmao ur code is lame** \`\`\`xl\n${stderr}\n\`\`\``);
            message.channel.send(stdout, { code: 'xl' });
        });
    },
};