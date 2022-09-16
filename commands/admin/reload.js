// reload.js File
// Code by Hùng Channels
// #Discord.js #HungChannels #Code
const handler = require('../../handlers/command.js');
const { ownerid } = require('../../config.json');
module.exports = {
    name: `reload`,
    aliases: [`reload`],
    category: `admin`,
    description: `Load lại toàn bộ lệnh(chỉ admin sử dụng)`,
    usage: `${process.env.DISCORD_PREFIX}reload`,
    run: async (client, message, args) => {
        if (message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
        if (process.env.TYPE_RUN == 'production') client.shard.respawnAll();
        else {
            await client.commands.clear();
            await client.aliases.clear();
            handler(client);
        }
        message.reply('Đã reload bot thành công');
    }
}