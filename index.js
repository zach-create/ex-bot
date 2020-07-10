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
                if(msg.content === "Hello"){
                 msg.reply('Hello Mate!');
                
                }
                })



                bot.on('message', msg=>{
                    if(msg.content === "hello"){
                     msg.reply('Hello Mate!');
                    
                    }
                    })



 bot.on('message', msg=>{
                if(msg.content === "BYE"){
                 msg.reply('BYE Hope to See You Soon');
                
                }
                })
                bot.on('message', msg=>{
                    if(msg.content === "Bye"){
                     msg.reply('BYE Hope to See You Soon');
                    
                    }
                    })
                    bot.on('message', msg=>{
                        if(msg.content === "bye"){
                         msg.reply('BYE Hope to See You Soon');
                        
                        }
                        })
         
                        if (message.content === '!mvp') {

                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Some title')
                        .setURL('https://discord.js.org/')
                        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                        .setDescription('Some description here')
                        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                        .addFields(
                            { name: 'Regular field title', value: 'Some value here' },
                            { name: '\u200B', value: '\u200B' },
                            { name: 'Inline field title', value: 'Some value here', inline: true },
                            { name: 'Inline field title', value: 'Some value here', inline: true },
                        )
                        .addField('Inline field title', 'Some value here', true)
                        .setImage('https://i.imgur.com/wSTFkRM.png')
                        .setTimestamp()
                        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
                    
                    channel.send(exampleEmbed);



                        }






bot.login(process.env.token); 