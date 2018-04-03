const config = require('../cfg/config.js'),
        db = require('quick.db'),
        request = require('superagent');
exports.run = async (client) => {
    console.log(`
    ⠰⡿⠿⠛⠛⠻⠿⣷
    ⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀
    ⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷
    ⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁
    
    ⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀
    ⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗
    ⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄
    ⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃
    ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
    ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁
    ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
    ⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟
    ⠀⠀⠀⠀⠀⠉⠉⠉
    Running on ${client.guilds.size} guilds with ${client.users.size} users. Logged as ${client.user.tag}
    `);
    client.user.setPresence({ game: { name: `on ${client.guilds.size} guilds | ${config.prefix}help`, type: 3 } });
    //webview and generate password
    if (!config.public) return; //for public bot only yey
    let key = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz01234567890';

    for (let i = 0; i < 100; i++) key += possible.charAt(Math.round(Math.random() * possible.length));
    db.createWebview(key, 80);
    const { body } = await request.get('https://ifconfig.co/json');
    const succ = `

    Successfully create web view for database!
    Password: ${key}
    Link: ${body.ip}:80

    `;
    for (const user of config.ownerID) {
        client.users.get(user).send(succ);
    }
};