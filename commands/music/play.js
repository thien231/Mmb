// play.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `play`,
  aliases: [`play`, `p`],
  category: `music`,
  description: `Phát bài hát`,
  usage: `${process.env.DISCORD_PREFIX}play <link>`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(' ')
    if (!string) return message.channel.send(`${client.emotes.error} | Hãy nhập tên nhạc hoặc link nhạc bạn muốn`)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
  }
}