const config = require('../cfg/config.js');
exports.run = (client) => {
    console.log('Ready');
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
    `);
    client.user.setPresence({ game: { name: `on ${client.guilds.size} guilds | ${config.prefix}help`, type: 3 } });
};