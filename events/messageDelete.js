// messageDelete.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
module.exports = async (client, message) => {
    if (message.author.bot) return;
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        ID: message.id,
        image: message.attachments.first() ? message.attachments.first().proxyURL : ""
    });
}