const Discord = require("discord.js");

module.exports = {
    name: "discord",
    aliases: ["ds",],
    /**
     * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
     * @param {Discord.Guild} guild Servidor onde o comando foi executado
     * @param {Discord.User} user Usuário que executou o comando
     * @param {Discord.TextChannel} channel Canal onde o comando foi executado
     * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
     * @returns {void}
     */
    execute: async function (client, guild, user, channel, args) {
        let DiscordMensage = new Discord.MessageEmbed()
            .setAuthor(user.tag, user.displayAvatarURL())
            .setColor("#f93e54")
            .setTitle(`Nosso discord para contato`)
            .setURL("https://discord.gg/UagdY9vM5w")
            .setFooter('ID do usuário: ' + user.id)
            .setTimestamp();

        channel.send(DiscordMensage);
    }
}
