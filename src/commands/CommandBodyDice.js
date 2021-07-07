const Discord = require("discord.js");

module.exports = {
    name: "bodypart",
    aliases: ["body", "humampart", "part"],
    /**
     * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
     * @param {Discord.Guild} guild Servidor onde o comando foi executado
     * @param {Discord.User} user Usuário que executou o comando
     * @param {Discord.TextChannel} channel Canal onde o comando foi executado
     * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
     * @param {Discord.GuildMember} guildMember Membro dentro de uma guild
     * @returns {void}
     */
    execute: async function (client, guildMember, user, channel, args) {
        let humamParts = ["braço esquerdo", "braço direito", "perna esquerda", "perna direita", "coluna", "cabeça", "mão esquerda"];
        if (args.length >= 1) {

            console.log(args.length);
            
            let targetPart = humamParts[Math.floor(Math.random() * humamParts.length)]
            let partResultMensage = new Discord.MessageEmbed()
                .setAuthor(user.tag, user.avatarURL())
                .setTitle("PARTE DO CORPO ATINGIDA")
                .setDescription("Parte do corpo atingida: " + "**" + targetPart + "**")
                .setColor("#f93e54")
                .setTimestamp();

            channel.send(partResultMensage);
        }
    }
}