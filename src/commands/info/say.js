const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say", //alterar comando
  cooldown: 0,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

      const mention = message.author;
      const sayMessage = args.join(" ");
      message.channel.send(`${sayMessage}\n\n*Mensagem de:*  ${mention}`);
  },
};