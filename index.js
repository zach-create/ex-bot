const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () =>{

console.log('This Bot is Online');
})




bot.on('message', msg=>{
    if(msg.content === "HELLO"){
     msg.reply('HELLO FRIEND!');
    
    }
    
            bot.on('message', msg=>{
                if(msg.content === "BYE"){
                 msg.reply('Babye Catch You later!');
                
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