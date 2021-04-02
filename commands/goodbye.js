client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("691017619527958570");
  let channel = await client.channels.cache.get("691017620253573143");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":emoji_2:");
  if (guild != member.guild) {
    return console.log("Algum otário saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Vlw, cuida! ${emoji}`)
      .setImage("https://imgur.com/3vYVlHb.gif")
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Eita")
      .setTimestamp();

    channel.send(embed);
  }
});