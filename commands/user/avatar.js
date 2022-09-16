// avatar.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `avatar`,
    aliases: [`avatar`, `av`, `avt`],
    category: `user`,
    description: `Xem avatar của bất kì tài khoản Discord`,
    usage: `${process.env.DISCORD_PREFIX}avatar [tag/id]`,
    run: async (client, message, args) => {
        const HungChannels = await client.users.fetch(ownerid);
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const URL = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle(`Avatar: ${member.user.tag} | Admin: ${HungChannels.tag}`)
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        message.channel.send({ embeds: [avatarEmbed] });
    }
}