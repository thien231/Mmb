// server.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const express = require('express');
const server = express();
const { ownerid } = require('../config.json');
server.all('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write();
    res.end();
})

async function keepAlive(client) {
    const HungChannels = await client.users.fetch(ownerid);
    server.listen(3000, () => { console.log(`[KEEPALIVE] Đã kích hoạt online 24/24 | Admin: ${HungChannels.tag}`) });
}

module.exports = keepAlive;