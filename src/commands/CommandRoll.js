const Discord = require("discord.js");

module.exports = {
    name: "roll",
    aliases: ["rolls", "girar"],
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
        let incrementResult = 0;
        let maxRolls = 20;
        if (args.length >= 1) {

            //verificando se o primeiro argumenta inicia-se com a letra "d"
            if (args[0].toLowerCase().startsWith("d")) {
                /*
                    removendo letra "d" e adicionando um espaço em branco no lugar.
                */
                args[0] = args[0].replace("d", "");
                if (Number.isInteger(Number.parseInt(args[0]))) {
                    maxRolls = Number.parseInt(args[0]);
                    /*

                    */

                }
                if (args.length >= 2) {
                    if (Number.isInteger(Number.parseInt(args[1]))) {
                        rolls = Number.parseInt(args[1]);
                        if (rolls >= 20) {
                            let message_context = new Discord.MessageEmbed()
                                .setAuthor(user.tag, user.displayAvatarURL)
                                .setDescription(` ${user}, Rolagem de dados invalida!! Rolagem maxima de 20 dados simultaneos...`);
                            this.rolls = 20;
                            channel.send(message_context);
                        } else {
                            if (Number.isInteger(Number.parseInt(args[1]))) {
                                rolls = Number.parseInt(args[1]);
                                if (rolls > 20) {
                                    let message_context = new Discord.MessageEmbed()
                                        .setAuthor(user, user.displayAvatarURL)
                                        .setDescription(` ${user}, Rolagem de dados invalida!! Rolagem maxima de 20 dados simultaneos...`);

                                    this.rolls = 20;
                                    channel.send(message_context);
                                }
                            }
                        }
                    }
                }
            }
            if (rolls > 20) {
                this.rolls = 20;
            } else {

                let RollingDicesMensage = new Discord.MessageEmbed()
                    .setAuthor(user.tag, user.displayAvatarURL())
                    .setColor("#f93e54")
                    .setDescription(`Rolando os dados....`)
                    .setFooter('ID do usuário: ' + user.id)
                    .setTimestamp();

                channel.send(RollingDicesMensage).then(roll => {
                    let result = "";
                    console.log("rolls: " + rolls);
                    for (let i = 0; i < rolls; i++) {
                        let random = Math.floor(Math.random() * maxRolls + 1);

                        if (random === 0) {
                            result += " | " + Math.floor(Math.random() * maxRolls + 1);
                        } else {

                            result += " | " + random;
                        }
                    }
                    result = result.replace(" | ", "");

                    let resultMensage = new Discord.MessageEmbed()
                        .setAuthor(user.tag, user.displayAvatarURL())
                        .setTitle("RESULTADO DOS DADOS")
                        .setColor("#f93e54")
                        .setDescription(`Os resultados da rolagem de dados de ${user} são ` + result)
                        .setFooter('ID do usuário: ' + user.id)
                        .setTimestamp();

                    roll.edit(resultMensage);
                });
            }
        }
    }
}