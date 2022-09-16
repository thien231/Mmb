// avatar.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `avatar`,
    description: `Xem avatar của bất kì tài khoản Discord`,
    type: `CHAT_INPUT`,
    options: [{ name: `user`, description: `Người bạn muốn lấy avatar`, type: `USER`, required: false }],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const HungChannels = await client.users.fetch(ownerid);
        const URL = user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle(`Avatar: ${user.tag} | Admin: ${HungChannels.tag}`)
            .setFooter(`Người yêu cầu: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        interaction.reply({ embeds: [avatarEmbed] });
    }
}