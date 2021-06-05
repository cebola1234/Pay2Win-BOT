const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "warn", 
aliases: ["warnuser"],
run: async (client, message, args) => {
   
   if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('você não tem permissão de `EXPULSAR MEMBROS` para executar esse comando!') 

let user = message.mentions.members.first()
if(!user) return message.channel.send("Mencione alguem")

let motivo = args.slice(1).join(" ")
if(!motivo) return message.channel.send("Me de um motivo")


const ebd = new Discord.MessageEmbed()
.setTitle("Alerta")
.addField(" :hammer: **|** Usuário Punido: ", `${user}`)
.addField(" :link:  **|** Punido Por:", `${message.author}`)
.addField(" :writing_hand:  **|** Motivo:", `${motivo}`)
.setTimestamp ()
.setColor("GREEN")
.setFooter(`ID do usuário: ${user.user.id}`)
message.channel.send(ebd)

await db.add(`warnsCount_${message.guild.id}-${user.id}`, 1)
}
}