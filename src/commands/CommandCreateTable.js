const Discord = require("discord.js");

module.exports = {
	name: "createSession",
	aliases: ["create", "cs"],
	/**
	 * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
	 * @param {Discord.Guild} guild Servidor onde o comando foi executado
	 * @param {Discord.User} user Usuário que executou o comando
	 * @param {Discord.TextChannel} channel Canal onde o comando foi executado
	 * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
	 * @returns {void}
	 */
	execute: async function (client, guild, user, channel, args) {

		let messageEmbed = new Discord.MessageEmbed()
			.setAuthor(user.tag, user.displayAvatarURL())
			.setTitle("Criação de Sessão")
			.setColor("#f93e54")
			.setDescription(`
			Criador da sessão: ${user}
				Ao utilizar esse comando você estará gerando uma nova sessão de rpg que pode ser edita pela Dashboard
				Antes de tudo utilize s!inicialize para o bot registra todos os cargos necessários.

				Meu modelo base contem:

					:white_check_mark: 1 chat-mesa
					:white_check_mark: 1 chat-de-dados
					:white_check_mark: 1 chat-para-imagens
					:white_check_mark: 1 bate-papo
					:white_check_mark: x quantia de fichas base.
				
				O @Mestre será definido pelo criador da sessão ou seja quem utilizar o comando s!CreateTable.
				Os @Jogadores após utilizar o comando s!ficha em um dos slots criados.

 				Quais quer duvidas respectivos ao nosso modelo base digite s!discord para entrar em contato com os desenvolvedores utilizando s!Discord.
			`)
			.setFooter('ID do usuário: ' + user.id)
			.setTimestamp();
		channel.send(messageEmbed);

		const message = await new Discord.Message;
		/*
			Precisa arrumar a reação por emojis base do discord,
			erro => cannot read property 'emojis' of undefined - line 48

		*/
		message.react()
			.then(() => message.react(`:white_check_mark:`))
			.then(() => message.react(`:x:`));

		const filter = (reaction, user) => {
			return [`:white_check_mark:`, `:x:`].includes(reaction.emoji.name) && user.id === user.author.id;
		}
		message.createReactionCollector(filter, { max: 1, time: 3000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				switch (reaction.emoji.name) {

					case ':white_check_mark:':
						let messageToReply = new Discord.MessageEmbed()
							.setAuthor(user.tag, user.displayAvatarURL())
							.setTitle("Criando sessão....")
							.setDescription("Aguarde um momento estou criando sua sessão.");
						channel.send(messageToReply);
						break;
					case ':x:':
						let messageToReply_ = new Discord.MessageEmbed()
							.setAuthor(user.tag, user.displayAvatarURL())
							.setTitle("Encerrando criação de sessão");
						channel.send(messageToReply_);

						break;
				}
				message.delete();

			})
			.catch(collected => {
				message.delete();
				channel.send("Mensagem não respondida a tempo...");
			})

	}
}
