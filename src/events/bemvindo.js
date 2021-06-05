const client = require("../index.js");
const { Client, Message, MessageEmbed } = require("discord.js");

client.on("guildMemberAdd", (member) => {
  const embed = new MessageEmbed()
    .setDescription(`${member.user.tag} **Bem vindo ao** ${member.guild.name}!`)
    .setTimestamp()
    .setImage(
      "https://cdn.discordapp.com/attachments/850521039368618004/850872774053330974/7a4b27cc925ff8425ef34579cecbc03f.png"
    )
    .setColor("GREEN");

  const canalBemVindo = client.channels.cache.get("850872940244369499"); //ID DO CANAL QUE VC QUER MANDAR BEM VINDO

  canalBemVindo.send(embed);
});