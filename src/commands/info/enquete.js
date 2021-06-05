const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "enquete",
    description: "inicia uma votação",

    async run (bot, message, args) {
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply(" Por favor, especifique um canal em que você deseja que a enquete esteja!")
        if(!theDescription) return message.reply("Por favor, especifique uma descrição / pergunta para a enquete!")

        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("Enquete")
        .setDescription(theDescription)
        .setFooter("Enquete iniciada por: "+ message.author.username +'#'+ message.author.discriminator)

        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}