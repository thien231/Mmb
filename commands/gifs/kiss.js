// kiss.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
module.exports = {
    name: `kiss`,
    aliases: [`kiss`, `hon`],
    category: `gifs`,
    description: `Hôn ai đó`,
    usage: `${process.env.DISCORD_PREFIX}kiss <tag>`,
    run: async (client, message, args) => {
        async function nekof() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.kiss();
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.tag}** đã hôn **${member.user.tag}**`)
                .setImage(GIF.url);
            message.channel.send({ embeds: [embed] });
        }
        nekof();
    }
}