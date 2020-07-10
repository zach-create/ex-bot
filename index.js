const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () =>{

console.log('This Bot is Online');
})



const PREFIX = "!";

bot.on('message', message => {
    let args = message.content.slice(PREFIX.length).split(" ");
    switch(args[0]) {
      case 'servers':
          const embed = new Discord.MessageEmbed()
          .setTitle('INDINET CSGO SERVER IP')
          .addField('DEATHMATCH','steam://connect/45.117.204.250:27015').addField('PUBLIC CASUAL','steam://connect/45.117.204.250:27016')
          .addField('AWP SERVER','steam://connect/45.117.204.250:27017')
          .addField('RETAKE 1','steam://connect/103.57.241.226:28015')
          .addField('RETAKE 3','steam://connect/45.117.203.250:28015')
          .addField('MULTI 1 V 1 ','steam://connect/45.117.203.250:27017')
          .addField('KZ-CLIMB','steam://connect/45.117.203.250:27016')
          .addField('SCRIM 2','steam://connect/103.57.241.226:28016')
          .setColor(0xFEFA07);
          ;
          message.channel.send(embed);
          break;



    }




})


























bot.on('message', msg=>{
if(msg.content === "HELLO"){
 msg.reply('HELLO FRIEND!');

}
})


bot.on('message', msg=>{
    if(msg.content === "Author"){
     msg.reply('Zach');
    
    }
    })
bot.on('message', msg=>{
        if(msg.content === "Version"){
         msg.reply('0.3.1');
        
        }
})


bot.login(process.env.token); 