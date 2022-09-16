// run.js File
// Code by Hùng Channels
// #Discord.js #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
module.exports = {
    name: `run`,
    aliases: [`run`],
    category: `admin`,
    description: `Cho bot chạy code(chỉ admin sử dụng)`,
    usage: `${process.env.DISCORD_PREFIX}run <code>`,
    run: async (client, message, args) => {
        if (message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
        if (!args.length) return;
        let evaled;
        try {
            evaled = await eval(args.join(' '));
        } catch (err) {
            message.reply(`Đã xảy ra lỗi khi dùng lệnh: ${err.toString()}`);
        }
    }
}