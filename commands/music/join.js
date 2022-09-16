// join.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { Constants } = require('discord.js');
module.exports = {
  name: `join`,
  aliases: [`join`, `move`],
  category: `music`,
  description: `Vào voice chat`,
  usage: `${process.env.DISCORD_PREFIX}join [id]`,
  run: async (client, message, args) => {
    let voiceChannel = message.member.voice.channel
    if (args[0]) {
      voiceChannel = await client.channels.fetch(args[0])
      if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
        return message.channel.send(`${client.emotes.error} | ${args[0]} Voice chat không khả dụng`)
      }
    }
    if (!voiceChannel) {
      return message.channel.send(`${client.emotes.error} | Bạn phải trong voice chat hoặc nhập id voice chat`)
    }
    client.distube.voices.join(voiceChannel)
  }
}