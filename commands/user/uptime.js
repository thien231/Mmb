// uptime.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `uptime`,
  aliases: [`uptime`],
  category: `user`,
  description: `Xem thời gian bot đã hoạt động`,
  usage: `${process.env.DISCORD_PREFIX}uptime`,
  run: async (client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    message.channel.send(`Bot đã hoạt động được: _**${days}**_ ngày, _**${hours}**_ giờ, _**${minutes}**_ phút, _**${seconds}**_ giây`);
  }
}