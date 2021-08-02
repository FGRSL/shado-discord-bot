const Discord = require("discord.js");

module.exports = {
    name: "ficha",
    aliases: ["f",],
    /**
     * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
     * @param {Discord.Guild} guild Servidor onde o comando foi executado
     * @param {Discord.User} user Usuário que executou o comando
     * @param {Discord.TextChannel} channel Canal onde o comando foi executado
     * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
     * @returns {void}
     */
    execute: async function (client, guild, user, channel, args) {

        let userLevel = 10;
        let userClass = "Guerreiro";
        let forca = 10;
        let constituicao = 20;
        let destreza = 10;
        let inteligencia = 30;
        let carisma = 20;
        let sabedoria = 20;



        let messageEmbed = new Discord.MessageEmbed()
            .setAuthor(user.tag, user.displayAvatarURL())
            .setTitle("Minha ficha")
            .setColor("#f93e54")
            .setDescription(`

                ***:arrow_up:NIVEL*** **${userLevel}**

                ***:cl:lass:***  **${userClass}**
            
                ***ATRIBUTOS***

                ***:regional_indicator_f:orça***
                ***${forca}***
  
                ***:regional_indicator_c:onstituição***
                ***${constituicao}***

                ***:regional_indicator_d:estreza***              
                ***${destreza}***                                          
  
                ***:regional_indicator_i:nteligência***
                ***${inteligencia}***

                ***:regional_indicator_c:arisma***
                ***${carisma}***                                            
                
                ***:regional_indicator_s:abedoria***
                ***${sabedoria}***
            `)
            .addField("Força", forca, true)
            .addField("Destreza", destreza, false)
            .addField("Inteligência", inteligencia, true)
            .addField("Constituição", constituicao, false)
            .setFooter('ID do usuário: ' + user.id)
            .setTimestamp();
        channel.send(messageEmbed);
    }
}
