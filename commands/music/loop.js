// loop.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
  name: `loop`,
  aliases: [`loop`, `repeat`],
  category: `music`,
  description: `Lặp lại bài hát`,
  usage: `${process.env.DISCORD_PREFIX}loop`,
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Không có bài hát đang phát`)
    let mode = null
    switch (args[0]) {
      case 'off':
        mode = 0
        break
      case 'song':
        mode = 1
        break
      case 'queue':
        mode = 2
        break
    }
    mode = queue.setRepeatMode(mode)
    mode = mode ? (mode === 2 ? 'hàng chờ' : 'bài hát') : 'tắt'
    message.channel.send(`${client.emotes.repeat} | Chế độ loop: \`${mode}\``)
  }
}