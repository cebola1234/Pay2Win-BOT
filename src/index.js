const { Collection, Client, Discord } = require('discord.js');
const dotenv = require("dotenv");
dotenv.config();
const client = new Client({
    disableMention: 'everyone'
});
const path = require('path')
const fs = require('fs')

module.exports = client;
client.commands = new Collection();
client.prefix = process.env.PREFIX;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
}); 

client.login(process.env.TOKEN);