// event.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { readdirSync } = require('fs');
module.exports = async (client) => {
    let count = 0;
    const files = readdirSync('./events');
    for (const f of files) {
        if (!f.endsWith('.js')) continue;
        const eventName = f.substring(0, f.indexOf('.js'));
        const event = require(`../events/${f}`);
        client.on(eventName, event.bind(null, client));
        count++;
    }
    console.log(`[EVENT] Loaded ${count} events`)
}