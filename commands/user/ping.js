// ping.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
    name: `ping`,
    aliases: [`ping`],
    category: `user`,
    description: `Xem độ trễ của bot`,
    usage: `${process.env.DISCORD_PREFIX}ping`,
    run: async (client, message, args) => {
        message.reply(`_**Pong ${client.ws.ping} ms **_`)
    }
}