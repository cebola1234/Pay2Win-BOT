const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'skin',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const nick = args[0];

        if (!nick)
          return message.channel.send(
            `${message.author}, Você Precisa Inserir o Nome de Alguém no Minecraft`);
    
    
        let embed = new MessageEmbed()
          .setTitle(`Skin: ${nick}`)
          .setImage(`https://mc-heads.net/body/${nick}/300`)
          .setColor('GREEN');
    
        message.channel.send(embed)
    }
}