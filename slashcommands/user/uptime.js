// uptime.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
module.exports = {
    name: `uptime`,
    description: `Xem thời gian bot đã hoạt động`,
    type: `CHAT_INPUT`,
    run: async (client, interaction) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        interaction.reply(`Bot đã hoạt động được: _**${days}**_ ngày, _**${hours}**_ giờ, _**${minutes}**_ phút, _**${seconds}**_ giây`);
    }
}