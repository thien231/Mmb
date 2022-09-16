// command.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { readdirSync } = require('fs');
module.exports = (client) => {
    let count = 0;
    readdirSync('./commands').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                count++;
                client.commands.set(pull.name, pull);
            } else {
                console.log(`[UNLOAD] ../${dir}/${file}`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    })
    console.log(`[COMMAND] Loaded ${count} commands`);
}