const discord = require('discord.js')
module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "Não tenho permissões adequadas para usar este comando!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Mencione o usuário que você deseja expulsar do canal de voz!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`O usuário não está em nenhum canal de voz!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`O usuário foi expulso do canal de voz!`)
  }
};