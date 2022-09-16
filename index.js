// It hungchannels123/HungChannelsBot-2Y2C on github source code I don't get money about this code ! Remember this !

// index.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code

// Khởi đầu
require('dotenv').config();
const { Client, Collection, MessageEmbed, version } = require('discord.js');
const client = new Client({ intents: 32767, partials: ['MESSAGE', 'CHANNEL', 'REACTION'], allowedMentions: { parse: ['users'], repliedUser: false }, disableEveryone: true, disableMentions: 'everyone' });
const { ownerid, ratelimitchannel, errorchannel } = require('./config.json');
// const { GiveawaysManager } = require('discord-giveaways');
// const giveawayModel = require('./models/giveaways.js');
// const Levels = require('discord-xp');
const { DisTube } = require('distube');

// Không được xóa từ dòng 16 đến dòng 35 không bot sẽ không chạy, bạn chỉ việc sửa lại token và thông tin tại config.json và .env
let hungchannelstv = '364714303351160833'
// Check admin
const HungChannels = client.users.fetch(ownerid);
const config = require('./config.json')
console.log(`[CONFIG] Đã load thành công file config.json`)
if (hungchannelstv === '364714303351160833') {
    console.log(`[CHECK] Đã xác minh thành công`)
    console.log(`[ADMIN] Thanks to https://github.com/phamleduy04, https://github.com/MoonVN571, https://github.com/VaitoSoi`)
    console.log(`[ADMIN] So many thanks to @0Channy, @BuronKanzaki`)
    console.log(`[ADMIN] And then say goodbye 2y2c`)
    console.log(`[ADMIN] Nếu có lỗi hãy liên hệ Hùng Channels#0669`)
    console.log(`[ADMIN] https://www.facebook.com/HungChannels.TV`)
    console.log(`[DISCORD.JS] Bạn đang sử dụng discord.js phiên bản ${version}`)
    try { require('dotenv').config() }
    catch (e) { console.log(`[ERROR] Đã xảy ra lỗi khi login, lỗi: ${e}`) }
    client.login(process.env.DISCORD_TOKEN, err => console.log(`[LOGIN] Đã xảy ra lỗi khi login, lỗi: ${err}`));
} else {
    console.log(`[CHECK] Không thể login với lí do: Liên hệ Hùng Channels#0669 để được hỗ trợ`)
    process.exit()
}

// Thanks to https://github.com/phamleduy04, https://github.com/MoonVN571, https://github.com/VaitoSoi
// THIZ BOT WAS MADE BY ME (HUNGCHANNELS.TV) - DO NOT STEAL MY CODE - ＨｕｎｇＣｈａｎｎｅｌｓ．ＴＶ　（フャナ）
// So many thanks to @0Channy, @BuronKanzaki
// 2y2c never die, thanks, many thanks

// discord.js by https://github.com/phamleduy04
module.exports = client;

// Command đã được chuyển qua ./commands
// Slashcommand đã dược chuyển qua ./slashcommands
// Event đã được chuyển qua ./events

// Collection
client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();
client.snipes = new Collection();
client.emotes = require('./hungchannelstv/config.json').emoji;
client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
});

// Command/Event handlers by https://github.com/phamleduy04
['command', 'event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));

// In line 71 to 115 can't use because I disabled mongoose aka mongodb so can use this in this code

// MongoDB by https://github.com/VaitoSoi
// require('./vaitosoi/database.js')(require('mongoose'));

// Level up
// Levels.setURL(process.env.MONGODB);

// client.on('messageCreate', async (message) => {
//     if (message.author.bot || !message.guild) return;
//     const randomXp = Math.floor(Math.random() * 15) + 1
//     const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp)
//     if (hasLeveledUp) {
//         const user = await Levels.fetch(message.author.id, message.guild.id)
//         message.channel.send(`GG ${message.author}, bạn vừa được lên level ${user.level} 🎉😎`)
//     }
// });

// Giveaways
// const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
//     async getAllGiveaways() {
//         return await giveawayModel.find().lean().exec();
//     }
//     async saveGiveaway(messageId, giveawayData) {
//         await giveawayModel.create(giveawayData);
//         return true;
//     }
//     async editGiveaway(messageId, giveawayData) {
//         await giveawayModel.updateOne({ messageId }, giveawayData, { omitUndefined: true }).exec();
//         return true;
//     }
//     async deleteGiveaway(messageId) {
//         await giveawayModel.deleteOne({ messageId }).exec();
//         return true;
//     }
// };

// const manager = new GiveawayManagerWithOwnDatabase(client, {
//     default: {
//         botsCanWin: false,
//         embedColor: 'RANDOM',
//         embedColorEnd: '#000000',
//         reaction: '🎉'
//     }
// });

// client.giveawaysManager = manager;

// Line 119 to 157 don't need to use this I disabled

// Ratelimit and error by https://github.com/VaitoSoi
// client.on('rateLimit', async (rateLimit) => {
//     const channel = await client.channels.fetch(ratelimitchannel)
//     if (!channel) return
//     channel.send({
//         embeds: [
//             new MessageEmbed()
//                 .setAuthor({
//                     name: '🛑 RateLimit Error!!',
//                     iconURL: client.user.displayAvatarURL()
//                 })
//                 .setDescription(`**Path:** \`${rateLimit.path}\`\n**Method:** \`${rateLimit.method}\`\n**Limit:** \`${rateLimit.limit}\`\n**Timeout:** \`${rateLimit.timeout}\`\n**Route:** \`${rateLimit.route}\`\n**Global:** \`${rateLimit.global}\``)
//                 .setTimestamp().setFooter({
//                     text: `${client.user.tag}`
//                 })
//                 .setColor('RED')
//         ]
//     })
// });

// client.on('error', async (error) => {
//     const channel = await client.channels.fetch(errorchannel)
//     if (!channel) return;
//     channel.send({
//         embeds: [
//             new MessageEmbed()
//                 .setAuthor({
//                     name: '🛑 Error!!',
//                     iconURL: client.user.displayAvatarURL()
//                 })
//                 .setDescription('**Error:** ```' + error + '```')
//                 .setTimestamp()
//                 .setFooter({
//                     text: `${client.user.tag}`
//                 })
//                 .setColor('DARK_RED')
//         ]
//     })
// });

const status = (queue) =>
    `Âm lượng: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Tắt'
    }\` | Loop: \`${queue.repeatMode
        ? queue.repeatMode === 2
            ? 'Tất cả hàng chờ'
            : 'Chỉ bài này'
        : 'Tắt'
    }\` | Autoplay: \`${queue.autoplay ? 'Bật' : 'Tắt'}\``;
client.distube.on('playSong', (queue, song) =>
    queue.textChannel.send(`${client.emotes.play} | Đang phát \`${song.name}\` - \`${song.formattedDuration}\`\nNgười yêu cầu: ${song.user}\n${status(queue)}`)
)
client.distube.on('addSong', (queue, song) =>
    queue.textChannel.send(`${client.emotes.success} | Đã thêm ${song.name} - \`${song.formattedDuration}\` vào hàng chờ bởi ${song.user}`)
)
client.distube.on('addList', (queue, playlist) =>
    queue.textChannel.send(
        `${client.emotes.success} | Đã thêm \`${playlist.name}\` playlist (${playlist.songs.length} bài) vào hàng chờ\n${status(queue)}`
    )
)
client.distube.on('error', (channel, e) => {
    channel.send(`${client.emotes.error} | Đã xảy ra lỗi: ${e.toString().slice(0, 1974)}`)
    console.error(e)
})
client.distube.on('empty', channel => channel.send('Voice chat không có người, đang thoát khỏi voice chat'))
client.distube.on('searchNoResult', (message, query) =>
    message.channel.send(`${client.emotes.error} | Không có kết quả cho \`${query}\``)
)
client.distube.on('finish', queue => queue.textChannel.send(`${client.emotes.success} | Đã hết hàng chờ`))

// https://www.facebook.com/HungChannels.TV
