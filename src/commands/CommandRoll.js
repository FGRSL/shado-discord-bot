const Discord = require("discord.js");

module.exports = {
    name: "rolls",
    aliases: ["Rolagem de dados"],
    /**
     * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
     * @param {Discord.Guild} guild Servidor onde o comando foi executado
     * @param {Discord.User} user Usuário que executou o comando
     * @param {Discord.TextChannel} channel Canal onde o comando foi executado
     * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
     * @returns {void}
     */
    execute: async function (client, guild, user, channel, args) {
        let rolls = 1;
        let maxRolls = 20;

        if (args.length > 1) {
            //verificando se o primeiro argumenta inicia-se com a letra "d"
            if (args[0].toLowerCase().startsWith("d")) {
                /*
                    removendo letra "d" e adicionando um espaço em branco no lugar.
                */
                args[0] = args[0].replace("d", "");
                if (Number.isInteger(Number.parseInt(args[0]))) {
                    maxRolls = Number.parseInt(args[0]);

                }
                if (args.length >= 2) {
                    if (Number.isInteger(Number.parseInt(args[1]))) {
                        rolls = Number.parseInt(args[1]);
                        if (rolls >= 20) {
                            let message_context = new Discord.RichEmbed().SetDescription("Teste");
                            user.channel.send(message_context);
                        }else{
                            
                        }
                    }
                }
            }
        }
    }
}
