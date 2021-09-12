const Discord = require("discord.js");
const fetch = require("node-fetch");
const RestService = require("../rest/RestService");


module.exports = {
    name: "registro",
    aliases: ["r", "rg"],
    /**
     * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
     * @param {Discord.Guild} guild Servidor onde o comando foi executado
     * @param {Discord.User} user Usuário que executou o comando
     * @param {Discord.TextChannel} channel Canal onde o comando foi executado
     * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
     * @returns {void}
     */
    execute: async function(client, guild, user, channel, args) {
        const result = await RestService.execute("GET", "/api/v1/users/?"); //id do usuario na ?

        console.log(result);
    }
}