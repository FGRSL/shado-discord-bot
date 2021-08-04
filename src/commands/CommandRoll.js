const Discord = require("discord.js");
const { getCooldown, addCooldown, removeExpireds, removeCooldown } = require("../server/CooldownUtils");

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

            if (Number.isInteger(Number.parseInt(args[0].charAt(0)))) {
                rolls = Number.parseInt(args[0][0]);

                args[0] = args[0].replace(rolls + "d", "");

            } else if (args[0].toLowerCase().startsWith("d")) {
                args[0] = args[0].replace("d", "");

            }
            if (args.length > 1) {

                if (args[1].startsWith("+")) {
                    args[1] = args[1].replace("+", "");
                    incrementResult = Number.parseInt(args[1]);
                }
            }
            RollingDices(user, channel, rolls, maxRolls, incrementResult);
            //verificando se o primeiro argumenta inicia-se com a letra "d"
        }
    }
}


function RollingDices(user, channel, rolls, maxRolls, incrementResult) {

    if (incrementResult == null) {
        incrementResult = 0;
        console.log("Valor a ser somado: " + incrementResult);
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
            console.log("increment: " + incrementResult);
            for (let i = 0; i < rolls; i++) {
                let random = Math.floor(Math.random() * maxRolls + 1);
                console.log("valor sortido: " + random);

                random += incrementResult

                console.log(`valor sortido + valor a ser somado ${incrementResult}: ` + random);
                console.log("------------------------------------------");

                if (random === 0) {
                    result += " | " + Math.floor(Math.random() * maxRolls + 1);
                } else {

                    result += " | " + random;
                }
            }

            result = result.replace(" | ", "");

            if (removeCooldown("mensageSend", "message")) {
                return;
            }
            addCooldown("messageSend", "message", 100);

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