// serverinfo.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};
module.exports = {
    name: `serverinfo`,
    description: `Xem thông tin của server`,
    type: `CHAT_INPUT`,
    run: async (client, interaction) => {
        const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = interaction.guild.members.cache;
        const emojis = interaction.guild.emojis.cache;
        const embed = new MessageEmbed()
            .setTitle(`Thông tin về _**${interaction.guild.name}**_`)
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .addFields({
                name: `Tổng quan`,
                value: `**❯ Tên server:** ${interaction.guild.name}
**❯ ID:** ${interaction.guild.id}
**❯ Admin server:** <@!${interaction.guild.ownerId}> (${interaction.guild.ownerId})
**❯ Vùng:** ${regions[interaction.guild.region]}
**❯ Cấp độ boost:** ${interaction.guild.premiumTier ? `Cấp độ ${interaction.guild.premiumTier}` : `Không có`}
**❯ Bộ lọc:** ${filterLevels[interaction.guild.explicitContentFilter]}
**❯ Cấp độ xác minh:** ${verificationLevels[interaction.guild.verificationLevel]}
**❯ Ngày tạo:** ${moment(interaction.guild.createdTimestamp).format('LT')} ${moment(interaction.guild.createdTimestamp).format('LL')} ${moment(interaction.guild.createdTimestamp).fromNow()}`,
                inline: true
            },
                {
                    name: `Thống kê:`,
                    value: `**❯ Số lượng role:** ${roles.length}
**❯ Số lượng emoji:** ${emojis.size}
**❯ Số lượng emoji thường:** ${emojis.filter(emoji => !emoji.animated).size}
**❯ Số lượng emoji động:** ${emojis.filter(emoji => emoji.animated).size}
**❯ Số lượng member:** ${interaction.guild.memberCount}
**❯ Người dùng:** ${members.filter(member => !member.user.bot).size}
**❯ Bot:** ${members.filter(member => member.user.bot).size}
**❯ Số lượng boost:** ${interaction.guild.premiumSubscriptionCount || '0'}`,
                    inline: true
                })
            .setFooter(`Người yêu cầu: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        interaction.reply({ embeds: [embed] });
    }
}