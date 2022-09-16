// interactionCreate.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { Collection } = require('discord.js');
module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.interactions.get(interaction.commandName);
    if (!command) interaction.reply(`Lệnh không hợp lệ`);
    if (command) {
        if (!client.cooldowns.has(command.name)) client.cooldowns.set(command.name, new Collection());
        const now = Date.now();
        const timestamps = client.cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;
        if (timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return interaction.reply(`Bạn phải chờ ${timeLeft.toFixed(1)} giây để tiếp tục sử dụng lệnh này`);
            }
        }
        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
        command.run(client, interaction);
    }
}