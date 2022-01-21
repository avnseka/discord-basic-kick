const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek i�in **�yeleri At** iznine sahip olmal�s�n!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`Sunucudan atmam i�in istedi�iniz kullan�c�y� etiketlemelisiniz; \`${prefix}at @avn\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini atamazs�n.');
if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullan�c�n�n senin rollerinden/rol�nden daha y�ksek rolleri/rol� var.`);
			    if (!reason) reason = 'Belirtilmemi�.'
    if (!user) return message.channel.send(`Etiketledi�in ki�i sunucuda bulunmuyor.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketledi�in ki�i sunucuda bulunmuyor.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu ki�iyi sunucudan atam�yorum ��nk� \`benden daha y�ksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucudaki yetkilileri atamam!');
    message.guild.member(user).kick(reason);
message.channel.send(`<@${user.id}> **Adl� kullan�c� sunucudan at�ld�!** **Sebep: \`${reason}\``)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kick',
  description: 'Belirtti�iniz ki�iyi sunucudan atar.',
  usage: 'kick <@kullan�c�> <sebep>',
 
};
