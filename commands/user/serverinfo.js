// serverinfo.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
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
	aliases: [`serverinfo`],
	category: `user`,
	description: `Xem thông tin của server`,
	usage: `${process.env.DISCORD_PREFIX}serverinfo`,
	run: async (client, message, args) => {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const emojis = message.guild.emojis.cache;
		const embed = new MessageEmbed()
			.setTitle(`Thông tin về _**${message.guild.name}**_`)
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addFields({
				name: `Tổng quan`,
				value: `**❯ Tên server:** ${message.guild.name}
**❯ ID:** ${message.guild.id}
**❯ Admin server:** <@!${message.guild.ownerId}> (${message.guild.ownerId})
**❯ Vùng:** ${regions[message.guild.region]}
**❯ Cấp độ boost:** ${message.guild.premiumTier ? `Cấp độ ${message.guild.premiumTier}` : `Không có`}
**❯ Bộ lọc:** ${filterLevels[message.guild.explicitContentFilter]}
**❯ Cấp độ xác minh:** ${verificationLevels[message.guild.verificationLevel]}
**❯ Ngày tạo:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				inline: true
			},
				{
					name: `Thống kê:`,
					value: `**❯ Số lượng role:** ${roles.length}
**❯ Số lượng emoji:** ${emojis.size}
**❯ Số lượng emoji thường:** ${emojis.filter(emoji => !emoji.animated).size}
**❯ Số lượng emoji động:** ${emojis.filter(emoji => emoji.animated).size}
**❯ Số lượng member:** ${message.guild.memberCount}
**❯  dùng:** ${members.filter(member => !member.user.bot).size}
**❯ Bot:** ${members.filter(member => member.user.bot).size}
**❯ Số lượng boost:** ${message.guild.premiumSubscriptionCount || '0'}`,
					inline: true
				})
			.setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
			.setTimestamp()
			.setColor('RANDOM');
		message.channel.send({ embeds: [embed] });
	}
}