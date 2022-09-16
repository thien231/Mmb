// userinfo.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { MessageEmbed } = require('discord.js');
const { formatDate, trimArray } = require('../../phamleduy04/getinfo.js');
module.exports = {
    name: `userinfo`,
    description: `Xem thông tin của người dùng discord`,
    type: `CHAT_INPUT`,
    options: [{ name: `user`, description: `Người bạn muốn xem thông tin`, type: `USER`, required: false }],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const joined = formatDate(user.joinedAt);
        const created = formatDate(user.createdAt);
        let userFlags = "";
        const embed = new MessageEmbed()
            .setTitle(`Thông tin của ${user.tag}`)
            .setThumbnail(user.displayAvatarURL())
            .addFields({
                name: `Thông tin thành viên (server)`,
                value: `**- Nickname:** ${user.displayName}
				**- Tag:** ${user}
				**- Vào server vào ngày:** ${joined}`,
                inline: true
            },
                {
                    name: `Thông tin người dùng`,
                    value: `**- ID:** ${user.id}
					**- Tên người dùng**: ${user.username}
					**- Tag**: ${user.tag}
					**- Tạo vào lúc**: ${created}`,
                    inline: true
                })
            .setFooter(`Người yêu cầu: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        interaction.reply({ embeds: [embed] });
    }
}