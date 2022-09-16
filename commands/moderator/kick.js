// kick.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
    name: `kick`,
    aliases: [`kick`],
    category: `moderator`,
    description: `Kick người dùng khỏi discord`,
    usage: `${process.env.DISCORD_PREFIX}kick <tag/id>`,
    run: async (client, message, args) => {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply(`Bạn đang thiếu quyền kick người dùng`);
        if (!args[0] || !message.mentions.members.first() && (isNaN(args[0]) || !message.guild.members.cache.get(args[0]))) return message.reply(`Bạn chưa tag người cần kick`);
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (member.id === message.author.id) return message.reply(`Bạn không thể kick bản thân`);
        if (!member.kickable) return message.reply(`Bot không đủ quyền để kick người dùng này`);
        if (args[1]) {
            const reason = message.content.slice(7 + args[0].length);
            member.kick(reason);
            message.reply(`Kick người dùng ${member.user.tag} thành công, lí do ${reason}`);
        } else {
            member.kick();
            message.reply(`Kick người dùng ${member.user.tag} thành công`);
        }
    }
}