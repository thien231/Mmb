// slap.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
module.exports = {
    name: `slap`,
    aliases: [`slap`, `tat`],
    category: `gifs`,
    description: `Tát ai đó`,
    usage: `${process.env.DISCORD_PREFIX}slap <tag>`,
    run: async (client, message, args) => {
        async function nekof() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.slap();
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**${message.author.tag}** đã tát **${member.user.tag}**`)
                .setImage(GIF.url);
            message.channel.send({ embeds: [embed] });
        }
        nekof();
    }
}