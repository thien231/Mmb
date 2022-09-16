// queue.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `queue`,
  aliases: [`queue`, `hangcho`],
  category: `music`,
  description: `Xem danh sách bài hát trong hàng chờ`,
  usage: `${process.env.DISCORD_PREFIX}queue`,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Không có bài hát đang phát`)
    const q = queue.songs
      .map((song, i) => `${i === 0 ? 'Đang phát:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
      .join('\n')
    message.channel.send(`${client.emotes.queue} | **Hàng chờ**\n${q}`)
  }
}