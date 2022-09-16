// leave.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `leave`,
  aliases: [`leave`, `disconnect`],
  category: `music`,
  description: `Thoát voice chat`,
  usage: `${process.env.DISCORD_PREFIX}leave`,
  run: async (client, message, args) => {
    client.distube.voices.leave(message)
  }
}