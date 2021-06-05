const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "addemoji",
  cooldown: 2,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!args[0]) return message.reply("Please type a name for the emoji!");
    if (!args[1]) return message.reply("Please type a image url!");
    const emoji = {
      name: args[0],
      url: args[1],
    };

    try {
      message.member.guild.emojis.create(emoji.url, emoji.name);
      message.reply("Emoji added");
    } catch (err) {
      message.reply("Couldn't add the emoji " + emoji.name);
    }
  },
};