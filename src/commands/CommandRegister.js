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
        const result = await RestService.execute("GET", "/api/v1/users/?" [user.id]); //id do usuario na ?



        if (result != user.id) {
            let registerMensagem = new Discord.MessageEmbed()
                .setAuthor(user.tag, user.displayAvatarURL())
                .setColor("#f93e54")
                .setThumbnail(user.displayAvatarURL({
                    dynamic: true,
                    size: 2048
                }))
                .setTitle("Usuario não cadastrado!")
                .setDescription("Registrando você aguarde um momento...")
                .setTimestamp();

            channel.send(registerMensagem);

            let registerUser = [{
                "username": user.username,
                "id": user.id,
                "guild": user.guild
            }];

            console.log("[+]Novo usuario cadastrado: ", JSON.parse(registerUser));

        } else {

            let userRegister = new Discord.MessageEmbed()
                .setAuthor(user.tag, user.displayAvatarURL())
                .setColor("#f93e54")
                .setThumbnail(guildMember.user.displayAvatarURL({
                    dynamic: true,
                    size: 2048
                }))
                .setTitle("CADASTRADO FEITO COM SUCESSO!")
                .setDescription("[+] Bem vindo a familia miyuki - você está cadastrado nesse servidor!!!!")
                .setTimestamp();

            channel.send(userRegister);
        }


        console.log(result);
    }
}