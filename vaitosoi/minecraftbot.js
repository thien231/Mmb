// minecraftbot.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const mineflayer = require('mineflayer');
const tpsPlugin = require('mineflayer-tps')(mineflayer);
const util = require('minecraft-server-util');
const { Client, MessageEmbed, Message } = require('discord.js');
const ms = require('ms');
const fs = require('fs');
const { env } = require('process');
const { ownerid, developer, livechat } = require('../config.json');
const info = {
    name: env.MC_NAME,
    pass: env.MC_PASS,
    version: env.MC_VERSION,
    ip: env.MC_IP,
    port: env.MC_PORT
};
const color = {
    red: '#f00c0c',
    yellow: '#e5f00c',
    green: '#07fc03',
    pink: '#ff17bd',
    blue: '#09bced',
    purple: '#a009e0',
    blue2: '#094ded'
};

/**
 * @param {Client} client
 */
function createBot(client) {

    // Create bot

    const minecraftbot = mineflayer.createBot({
        host: info.ip,
        // port: info.port,
        username: info.name,
        version: info.version,
        plugins: {
            afk: require('./afk'),
        },
    });

    minecraftbot.loadPlugin(tpsPlugin);

    // Log when login

    let click = false
    let end = false
    let connect = 0
    let move = 0
    let login = false
    let err = 0
    let prepare = false
    let restart = false
    let logintime = 0

    /**
     * @param {MessageEmbed} embed 
     * @param {Message} msg
     * @param {String} color
     */
    async function send(embed, msg, color) {
        if (embed) {
            const channel = client.channels.cache.get(livechat);
            if (!channel) return;
            try {
                if (embed && embed !== '') channel.send({ embeds: [embed] })
                else channel.send(await codeblockGenerator(msg, color))
            } catch (e) {
                console.log(e)
            }
        }
    }
    /**
     * @param {String} msg 
     * @param {String} color 
     * @returns 
     */
    async function codeblockGenerator(msg, color) {
        let c = color.toLowerCase()
        if (c === 'blue' || c === 'xanh dương') {
            return '```md\n# ' + msg.toString() + '```'
        }
        else if (c === 'orange' || c === 'cam') {
            return '```cs\n# ' + msg.toString() + '```'
        }
        else if (c === 'red' || c === 'đỏ') {
            return '```cs\n- ' + msg.toString() + '```'
        }
        else if (c === 'green' || c === 'xanh lá') {
            return '```cs\n+ ' + msg.toString() + '```'
        }
        else if (c === 'gray' || c === 'grey' || c === 'xám') {
            return '```md\n> ' + msg.toString() + '```'
        }
        else {
            return '```' + msg + '```'
        }
    }
    /**
     * @param {String} time 
     * @param {Boolean} now 
     */
    minecraftbot.on('login', async () => {
        move++
        end = false
        prepare = false
        restart = false
        let server = ''
        logintime++
        if (move == 1) { server = 'Pin'; minecraftbot.afk.stop() }
        else if (move == 2) {
            server = 'Main';
            move = 0;
            err = 0
            setTimeout(() => {
                if (end === true) { return; }
                else {
                    minecraftbot.afk.start();
                }
                const embed = new MessageEmbed()
                    .setTitle('Bắt đầu afk')
                    .setColor('GREY')
                send(embed, 'Bắt đầu AFK', 'gray')
            }, 15000);
            // setInterval(() => {
            //     fs.readFile('../vaitosoi/tinnhan.txt', 'utf8', (err, data) => {
            //         if (err) throw err;
            //         const lines = data.split('\n');
            //         var random = lines[Math.floor(Math.random() * lines.length)];
            //         minecraftbot.chat(random);
            //     })
            // }, ms(`5m`));
            setInterval(() => {
                minecraftbot.chat(`> Loli shop kit | discord.gg/dkrZXtGVH4`);
            }, ms(`5m`));
        }
        const embed1 = new MessageEmbed()
            .setTitle(`Đã kết nối với server ${server}`)
            .setColor(color.green)
        send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
    });

    // Login to server
    // From MoonU
    minecraftbot.on('windowOpen', async (window) => {
        if (Number(window.slots.length) == 63 || Number(window.slots.length) == 62) {
            const embed = new MessageEmbed()
                .setTitle('Cửa sổ `Chuyển Server` mở')
                .setColor(color.green)
            send(embed, embed.title ? embed.title : embed.description, 'green')
            minecraftbot.simpleClick.leftMouse(13);
            const embed1 = new MessageEmbed()
                .setTitle('Đã click vào cửa sổ `Chuyển Server`')
                .setColor(color.green)
            send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
        } else if (Number(window.slots.length) == 45 || Number(window.slots.length) == 46) {
            const embed = new MessageEmbed()
                .setTitle('Cửa sổ `Nhập PIN` mở')
                .setColor(color.green)
            send(embed, embed.title ? embed.title : embed.description, 'green')
            click = true;
            window.requiresConfirmation = false;
            const pass = info.pass.split(' ')
            const p1 = pass[0];
            const p2 = pass[1];
            const p3 = pass[2];
            const p4 = pass[3];
            minecraftbot.simpleClick.leftMouse(Number(p1));
            minecraftbot.simpleClick.leftMouse(Number(p2));
            minecraftbot.simpleClick.leftMouse(Number(p3));
            minecraftbot.simpleClick.leftMouse(Number(p4));
            const embed1 = new MessageEmbed()
                .setTitle('Đã nhập mật khẩu')
                .setColor(color.green)
            send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
        }
    });

    // Livechat ingame (Mineflayer)
    // Phân loại

    // CHat thường
    const chat = /$<(.+)> (.+)^/;

    // Whisper
    const whisper1 = /^nhắn cho (.+): (.+)$/;
    const whisper2 = /^(.+) nhắn: (.+)$/;

    // Error
    const error1 = /^Unknown command$/;
    const error2 = /^Kicked whilst connecting to (.+)$/;
    const error3 = /^Could not connect to a default or fallback server, please try again later:(.+)$/;
    const error4 = /^Oops something went wrong... Putting you back in queue.$/;
    const error5 = /^Exception Connecting:ReadTimeoutException : null$/;
    const error6 = /^CommandWhitelist > No such command.$/;

    // Donater
    const donater = /^[Broadcast] (.+) (?:đạt mốc nạp|vừa ủng hộ) (.+)$/;

    //Sleep
    const sleepchat = /^(.+) players sleeping$/

    minecraftbot.on('message', async (message) => {
        if (whisper1.test(message.toString())
            || whisper2.test(message.toString())) {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.pink)
            send(embed, embed.title ? embed.title : embed.description, 'blue')
        }
        else if (error1.test(message.toString())
            || error2.test(message.toString())
            || error3.test(message.toString())
            || error4.test(message.toString())
            || error5.test(message.toString())
            || error6.test(message.toString())
        ) {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.red)
            send(embed, embed.title ? embed.title : embed.description, 'red')
            if (error4.test(message.toString())) {
                err++
                if (err >= 5) { minecraftbot.end('Không thể kết nối với server `Chính`'); err = 0 }
            }
        }
        else if (message.getText().toLowerCase().trim() === 'dùng lệnh/anarchyvn  để vào server.') {
            connect++;
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.blue)
            send(embed, embed.title ? embed.title : embed.description, 'blue')
            function connectServer(click, end, minecraftbot) {
                if (click === true && end === false) {
                    minecraftbot.chat('/anarchyvn');
                    const embed1 = new MessageEmbed()
                        .setTitle('Đã nhập `/anarchyvn`')
                        .setColor(color.green)
                    send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
                }
            }
            if (connect == 2) {
                connectServer(click, end, minecraftbot);
            } else if (connect < 2 && connect > 2 && connect < 8) {
                return;
            } else if (connect = 8) {
                connectServer(click, end, minecraftbot);
            } else if (connect > 8) {
                minecraftbot.end('Không thể kết nối với server `Hàng chờ`');
            }
        } else if (donater.test(message.toString())) {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.purple)
            send(embed, embed.title ? embed.title : embed.description, 'blue')
        } else if (message.toString() === 'The main server is down. We will be back soon!') {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.red);
            send(embed, embed.title ? embed.title : embed.description, 'red')
            setTimeout(() => { minecraftbot.end('Server Restart'); }, 5000);
        } else if (sleepchat.test(message.toString())) {
            return
        } else {
            if (message.toString() === '') return
            if (login === false && chat.test(message.toString())) {
                login === true;
                minecraftbot.afk.stop()
                setTimeout(() => {
                    if (end === true) { return; }
                    else {
                        end
                        minecraftbot.afk.start();
                        const embed = new MessageEmbed()
                            .setTitle('Bắt đầu afk')
                            .setColor('GREY')
                        send(embed, 'Bắt đầu AFK', 'gray')
                    }
                }, 15000);
            }
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`);
            if (message.toString().split(' ').shift() === `<${info.name}}>`) {
                embed.setColor(color.blue2);
            } else {
                embed.setColor(color.blue);
            }
            send(embed, embed.title ? embed.title : embed.description, 'blue')
        }
    });

    // Random number
    function random() {
        let random1 = Math.floor(Math.random() * 10)
        let random2 = Math.floor(Math.random() * 10)
        let random3 = Math.floor(Math.random() * 10)
        let random4 = Math.floor(Math.random() * 10)
        let random5 = Math.floor(Math.random() * 10)
        return `${random1}${random2}${random3}${random4}${random5}`
    }

    // Chat to game (Discord)
    client.on('messageCreate', async (message) => {
        if (message.author.bot || !message.guild) return;
        if (message.channel.id === livechat) {
            if (message.author.id === ownerid) {
                message.react('✔');
                minecraftbot.chat(`> [${message.author.tag}] ${message.content} | Mun`);
            } else if (message.author.id === developer) {
                message.react('✔');
                minecraftbot.chat(`> [${message.author.tag}] ${message.content} | HungChannels_TV`);
            } else if (message.member.roles.cache.has('')) {
                const randomnum = await random()
                message.react('✔');
                minecraftbot.chat(`> [${message.author.tag}] ${message.content} | ${randomnum}`);
            } else {
                const randomnum = await random()
                message.react('❌');
                // minecraftbot.chat(`> [${message.author.tag}] ${message.content} | ${randomnum}`);
            }
        }
    });

    // Login when kicked
    var kickcount = 0
    var rejoin = 0
    minecraftbot.on('end', (reason) => {
        end = true;
        let res = reason
        if (kickcount < 2) { rejoin = 1; kickcount++ }
        else { rejoin = 5; }
        if (reason.toString().toLowerCase() == 'Server Restart') { rejoin = 5; restart = true }
        if (prepare === true && reason.toString().toLowerCase() == 'Server Restart') restartsend('', true)
        const embed = new MessageEmbed()
            .setDescription(`**Bot đã mất kết nối đến server ${info.ip}, lí do: \`${res}\`, kết nối lại sau ${rejoin} phút**`)
            .setColor('#f00c0c')
        send(embed, embed.title ? embed.title : embed.description, 'red')
        setTimeout(async () => {
            const embed = new MessageEmbed()
                .setDescription(`Đang kết nối lại với ${info.ip} ...`)
                .setColor(color.yellow)
            send(embed, embed.title ? embed.title : embed.description, 'orange')
            createBot(client);
        }, ms(`${rejoin}m`));
    });
    /**
    * Command của bot ingame
    */
    // // Server
    // minecraftbot.addChatPattern('server', /<(.+)> (?:og.server|!server)/, { parse: true });
    // minecraftbot.on('chat:server', async () => {
    //     const randomnum = await random()
    //     util.status('anarchyvn.net').then(async (response) => {
    //         minecraftbot.chat(`> Tổng người chơi: ${response.onlinePlayers}/${response.maxPlayers} | TPS: ${minecraftbot.getTps()} | Uptime: ${ms(client.uptime)} | HungChannels_TV | ${randomnum}`);
    //     });
    // });
    // // Botinfo
    // minecraftbot.addChatPattern('botinfo', /<(.+)> (?:og.botinfo|og.bi|!botinfo|!bi)/, { parse: true });
    // minecraftbot.on('chat:botinfo', async (message) => {
    //     const randomnum = await random()
    //     minecraftbot.chat(`> WSPing: ${client.ws.ping}ms | Uptime: ${ms(client.uptime)} | HungChannels_TV | ${randomnum}`);
    // });
    // // Help
    // minecraftbot.addChatPattern('help', /<(.+)> (?:og.help|!help)/, { parse: true });
    // minecraftbot.on('chat:help', async () => {
    //     const randomnum = await random()
    //     minecraftbot.chat(`> Lệnh hiện có: server, botinfo, admin | HungChannels_TV | ${randomnum}`);
    // });
    // // Admin
    // minecraftbot.addChatPattern('admin', /<(.+)> (?:og.admin|!admin)/, { parse: true });
    // minecraftbot.on('chat:admin', async () => {
    //     const randomnum = await random()
    //     minecraftbot.chat(`> Discord: Hùng Channels#0669 | HungChannels_TV | ${randomnum}`);
    // });
    // Loli Shop Kit
    minecraftbot.addChatPattern('anarchyvnshop', /<(.+)> (?:og.anarchyvnshop|!anarchyvnshop)/, { parse: true });
    minecraftbot.on('chat:lolishop', async () => {
        const randomnum = await random()
        minecraftbot.chat(`> Loli shop kit | discord.gg/dkrZXtGVH4 | ${randomnum}`);
    });
}

// Export module ra index.js
module.exports.createBot = createBot;