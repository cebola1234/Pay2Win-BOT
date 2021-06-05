const { Client, Message, MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const prefix = process.env.PREFIX;

module.exports = {
    name: 'help',
    category : 'Info',
    description : 'Returns the help menu of the bot',
    cooldown: 0,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const roleColor =
        message.guild.me.displayHexColor === "#000000"
          ? "#ffffff"
          : message.guild.me.displayHexColor;
  
      if (!args[0]) {
        let categories = [];
  
        readdirSync("./src/commands/").forEach((dir) => {
          const commands = readdirSync(`./src/commands/${dir}/`).filter((file) =>
            file.endsWith(".js")
          );
      
          const cmds = commands.map((command) => {
            let file = require(`../../commands/${dir}/${command}`);
  
            if (!file.name) return "No command name.";
  
            let name = file.name.replace(".js", "");
  
            return `\`${name}\``;
          });
  
          let data = new Object();
  
          data = {
            name: dir.toUpperCase(),
            value: cmds.length === 0 ? "In progress." : cmds.join(" "),
          };
  
          categories.push(data);
        });
  
        const embed = new MessageEmbed()
          .setTitle("📬 Precisa de ajuda ? aqui estão todos meus comandos:")
          .addFields(categories)
          .setColor("GREEN")
          .setDescription(
            `Use \`${prefix}help\` seguido por um nome de comando para obter mais informações adicionais sobre um comando. Por exemplo: \`${prefix}help ping\`.`
          )
          .setFooter(
            `Requirido por ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor("GREEN");
        return message.channel.send(embed);
      } else {
        const command =
          client.commands.get(args[0].toLowerCase()) ||
          client.commands.find(
            (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
          );
  
        if (!command) {
          const embed = new MessageEmbed()
            .setTitle(
              `Comando inválido! Usar \`${prefix}help\` para todos os meus comandos!`
            )
            .setColor("GREEN");
          return message.channel.send(embed);
        }
  
        const embed = new MessageEmbed()
          .setTitle("Detalhes de Comando:")
          .addField("Prefixo:", `\`${prefix}\``)
          .addField(
            "Comando:",
            command.name ? `\`${command.name}\`` : "Sem nome para este comando."
          )
          .addField(
            "Apelido:",
            command.aliases
              ? `\`${command.aliases.join("` `")}\``
              : "Sem apelidos para este comando."
          )
          .addField(
            "Uso:",
            command.usage
              ? `\`${prefix}${command.name} ${command.usage}\``
              : `\`${prefix}${command.name}\``
          )
          .addField(
            "Descrição:",
            command.description
              ? command.description
              : "Sem descrição para este comando"
          )
          .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor("GREEN");
        return message.channel.send(embed);
      }
    }
}