// say.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
    name: `say`,
    aliases: [`say`],
    category: `other`,
    description: `Muốn bot nói thay bản thân`,
    usage: `${process.env.DISCORD_PREFIX}say <nội dung>`,
    run: async (client, message, args) => {
        if (!args.length) return;
        if (message.deletable) message.delete();
        message.channel.send(`${args.join(' ')}\n\nĐề nghị bởi: _**${message.author.tag}**_`);
    }
}