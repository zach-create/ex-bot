const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () =>{

console.log('This Bot is Online');
})

bot.on('message', msg=>{
    if(msg.content === "Author"){
     msg.reply('Zach');
    
    }
    })


    bot.on('message', msg=>{
        if(msg.content === "Version"){
         msg.reply('0,1.3');
        
        }
        })
     
        bot.on('message', msg=>{
            if(msg.content === "HELLO"){
             msg.reply('Hello Mate!');
            
            }
            })
            bot.on('message', msg=>{
                if(msg.content === "BYE"){
                 msg.reply('BYE Hope to See You Soon');
                
                }
                })
         


if(Discord.Message.content === '!mvp'){

const embed = new Discord.MessageEmbed()
.setTitle('ALL THE MVP SONGS')
.setColor('#FEFA07')

message.channel.send(embed)

}











bot.login(process.env.token); 