const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('🤖Ping')
            .setDescription(`**O ping WebSocket é** ${client.ws.ping}MS\n**Ping de edição de mensagem** ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send(embed)
            msg.delete()

    }
}