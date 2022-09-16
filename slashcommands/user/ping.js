// ping.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
module.exports = {
    name: `ping`,
    description: `Xem độ trễ của bot`,
    type: `CHAT_INPUT`,
    run: async (client, interaction) => {
        interaction.reply(`_**Pong ${client.ws.ping} ms **_`)
    }
}