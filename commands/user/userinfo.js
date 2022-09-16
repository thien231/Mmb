// userinfo.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const { getMember, formatDate, trimArray } = require('../../phamleduy04/getinfo.js');
module.exports = {
    name: `userinfo`,
    aliases: [`userinfo`, `whois`],
    category: `user`,
    description: `Xem thông tin của người dùng discord`,
    usage: `${process.env.DISCORD_PREFIX}userinfo`,
    run: async (client, message, args) => {
        const member = await getMember(message, args.join(' '));
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .filter(r => r.id !== message.guild.id)
            .map(r => r);
        const created = formatDate(member.user.createdAt);
        let userFlags = "";
        const embed = new MessageEmbed()
            .setTitle(`Thông tin của ${member.user.tag}`)
            .setThumbnail(member.user.displayAvatarURL())
            .addFields({
                name: `Thông tin thành viên (server)`,
                value: `**- Nickname:** ${member.displayName}
				**- Tag:** ${member}
				**- Vào server vào ngày:** ${joined}
				**- Roles:** ${roles.length == 0 ? 'Không có' : roles.length < 10 ? roles.join(', ') : roles.length >= 10 ? trimArray(roles, 10) : ''}`,
                inline: true
            },
                {
                    name: `Thông tin người dùng`,
                    value: `**- ID:** ${member.user.id}
					**- Tên người dùng**: ${member.user.username}
					**- Tag**: ${member.user.tag}
					**- Tạo vào lúc**: ${created}`,
                    inline: true
                })
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        message.channel.send({ embeds: [embed] });
    }
}