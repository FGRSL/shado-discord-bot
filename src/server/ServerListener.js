const Discord = require("discord.js");

/**
 * @param {Discord.Client} client 
 * @param {Discord.GuildMember} guildMember 
 * @returns {void}
 */
function guildMemberAdd(client, guildMember) {
    console.log("[+] Usuário '" + guildMember.user.tag + "' entrou no servidor '" + guildMember.guild.id + "'");
    /*
        Receber a guild registrada no bot e inserir o id dentro
        let guild = client.guilds.cache.get(guildID);
    
        Receber o canal de boas vindas setado pelo Usuario;
        let channel = client.channels.cache.get(channelID);
    */
    /**
     * @param {Discord} 
     * 
     */

    let guild = client.guilds.cache.get("843948919343808522");
    let channel = client.channels.cache.get("843948919343808524");


    if (guild.id != guildMember.guild.id) {
        return console.log("The user in question does not belong to this server - MESSAGE LINE 26 in ServerListener.js");
    } else {
        let embed = new Discord.MessageEmbed()
            .setColor('#f93e54')
            .setAuthor(guildMember.user.tag, guildMember.user.displayAvatarURL())
            .setTitle(`Boas-Vindas`)
            .setImage('https://i.pinimg.com/originals/49/26/52/492652d5649bb403be09e0ea3d04fbe7.gif')
            .setDescription(`${guildMember.user}, boas-vindas ao servidor ${guild.name}! atualmente com ${guildMember.guild.memberCount} jogadores`)
            .setThumbnail(guildMember.user.displayAvatarURL({
                dynamic: true,
                size: 2048
            }))
            .setFooter('ID do usuário: ' + guildMember.user.id)
            .setTimestamp();
        channel.send(embed);
    }
}
/**
 * @param {Discord.Client} client 
 * @param {Discord.GuildMember} oldGuildMember 
 * @param {Discord.GuildMember} newGuildMember 
 * @returns {void}
 */
function guildMemberUpdate(client, oldGuildMember, newGuildMember) {
    if (oldGuildMember && newGuildMember) {
        if (oldGuildMember.nickname != newGuildMember.nickname) {
            console.log("Usuário " + oldGuildMember.id + " trocou de nick de " + oldGuildMember.nickname + " para " + newGuildMember.nickname)
        }
    }
}

/**
 * @param {Discord.Client} client 
 * @param {Discord.GuildMember} guildMember 
 * @returns {void}
 */
function guildMemberRemove(client, guildMember) {
    console.log("[-] Usuário '" + guildMember.user.tag + "' saiu do servidor '" + guildMember.guild.id + "'");

    let channel = client.channels.cache.get("843948919343808524");

    let embed = new Discord.MessageEmbed()
        .setColor('#f93e54')
        .setAuthor(guildMember.user.tag, guildMember.user.displayAvatarURL())
        .setTitle(`Deixou o servidor...`)
        .setImage('https://i.pinimg.com/originals/65/ae/27/65ae270df87c3c4adcea997e48f60852.gif')
        .setDescription('Perdemos um jogador... Arrivederci')
        .setThumbnail(guildMember.user.displayAvatarURL({
            dynamic: true,
            size: 2048
        }))
        .setFooter('ID do usuário: ' + guildMember.user.id)
        .setTimestamp();
    channel.send(embed);

}

module.exports = { guildMemberRemove, guildMemberAdd, guildMemberUpdate };