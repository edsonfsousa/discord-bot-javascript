const Discord = require('discord.js');
 
exports.run = async (client, message, args) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setThumbnail(icon)
  .setTitle('<a:AnimeHug3:838087047943946311> - Meus Comandos:')
  .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções... \n Ah não esqueça do prefixo da RD, iniciado pelo <rd!>. \n\n <:edsonmiojokkk:838087049172615169> **- Comandos gerais.**\n\n <:fufu:838079734700441671> **- Comandos de moderação.**\n\n <:gostosinhaein:838087048237678633> **- Comandos de diversão.**`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))
 
  message.channel.send(comandos).then(msg => {
    msg.react('838087049172615169').then(r => {
      msg.react('838079734700441671').then(r => {
        msg.react('838087048237678633').then(r => {
 
        })
      })
    })
 
    const geralFilter = (reaction, user) => reaction.emoji.name === 'edsonmiojokkk' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === 'fufu' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'gostosinhaein' && user.id === message.author.id;
 
    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
 
 
    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - GERAIS')
      .setThumbnail(icon)
       .addFields(
        {
          name: '`help`',
          value: 'Trás uma lista de comandos pra te ajudar.'
        },
        {
        name: '`status`',
        value: 'Mostra o status.'
        },
				{
        name: '`uptime`',
        value: 'Mostra o tempo online da RD.'
        }
      )
      .setColor('RED')
      msg.edit(embed);
      })
 
    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - MODERAÇÃO')
      .setThumbnail(icon)
      .addFields(
        {
          name: '`idea`',
          value: 'Permite enviar sugestões.'
        },
        {
        name: '`clear`',
        value: 'Te permite limpar canais.'
        },
				{
        name: '`ping`',
        value: 'Consulte o ping da RD e do seu servidor.'
        }
      )
      .setColor('BLUE')
      msg.edit(embed);
    })
 
    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - DIVERSÃO')
      .setThumbnail(icon)
      .addFields(
        {
          name: '`kiss`',
          value: 'Te permite beijar um membro do servidor.'
        },
        {
        name: '`say`',
        value: 'Faz com que a RD digite o que você digitar antes.'
        },
				{
        name: '`coinflip`',
        value: 'Brincadeira do cara ou coroa com a RD.'
        },
				{
        name: '`avatar`',
        value: 'Mostra seu avatar no Discord.'
        },
				{
        name: '`emoji`',
        value: 'Faça a RD enviar algum emoji.'
        }
      )
      .setColor('ORANGE')
      msg.edit(embed);
    })
 
  })
 
}