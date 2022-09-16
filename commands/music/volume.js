// volume.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `volume`,
  aliases: [`volume`, `setvolume`, `amluong`],
  category: `music`,
  description: `Đặt lại volume của nhạc`,
  usage: `${process.env.DISCORD_PREFIX}volume <volume>`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Hiện tại không có bài hát trong hàng chờ`)
    const volume = parseInt(args[0])
    if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Hãy nhập số`)
    queue.setVolume(volume)
    message.channel.send(`${client.emotes.success} | Đã chỉnh âm lượng mức \`${volume}\``)
  }
}