const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () => {

    console.log('This Bot is Online');
    bot.user.setActivity('70,787 Players', { type: 'WATCHING' }).catch(console.error);

})

bot.on('message', msg => {
    if (msg.content === ".author") {
        msg.reply('Zach');

    }
})
bot.on('message', msg => {
    if (msg.content === ".version") {
        msg.reply('0,1.3');

    }
})
bot.on('message', msg => {
    if (msg.content === "HELLO") {
        
        msg.react('😉');
        msg.reply('Hello Mate!');

    }
})
bot.on('message', msg => {
    if (msg.content === "Hello") {
        
        msg.react('😉');
        msg.reply('Hello Mate!');

    }
})

bot.on('message', msg => {
    if (msg.content === "hello") {
        
        msg.react('😉');
        msg.reply('Hello Mate!');

    }
})



bot.on('message', msg => {
    if (msg.content === "BYE") {
        
        msg.react('😴');
        msg.reply('BYE Hope to See You Soon');

    }
})
bot.on('message', msg => {
    if (msg.content === "Bye") {
        msg.react('😴');
        msg.reply('BYE Hope to See You Soon');

    }
})
bot.on('message', msg => {
    if (msg.content === "bye") {
        msg.react('😴');
        msg.reply('BYE Hope to See You Soon');

    }
})
bot.on('message', msg => {
    if (msg.content === ".ranks") {

        
        msg.reply('https://rank.indinet.co.in/');

    }
})
bot.on('message', msg => {
    if (msg.content === ".help") {
        msg.channel.send(' ```𝐈𝐍𝐃𝐈𝐍𝐄𝐓 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐁𝐎𝐓  \n 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘈𝘥𝘮𝘪𝘯 \n -.kick @user_name \n -.ban @user_name \n \n 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘈𝘓𝘓 \n -.ranks - To get a Link To See Ranks \n- .top To See the Top 3 Plyers From Each Server with Kd \n -Some Greeting Commands  HELLO BYE \n\n ** Any Suggestions Related to BOT  Are Happly Taken \n- 𝐙𝐚𝐜𝐡 | 𝐀𝐝𝐦𝐢𝐧  \n \n \n 𝐇𝐚𝐩𝐩𝐲 𝐆𝐚𝐦𝐢𝐧𝐠 \n-TEAM INDINET  ```');

    }
})



bot.on('message', msg => {
    if (msg.content === ".top") {


        //msg.channel.send('Failed to load ss.rby script');

        msg.channel.send(' ```𝐈𝐍𝐃𝐈𝐍𝐄𝐓 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐁𝐎𝐓  \n TOP PLAYERS OF EACH SERVERS \n RETAKE 1 \n- ＮＯＳＦＥ�..(150,740) 1.32 kd\n-XenoN (92,770) 1.06 kd\n-♥BrAd™♥ (76,774) 1.58 kd \n\n REATKE RUSH \n-Coston1c (5018) 1.50\n-azazel^ (4380) 1.50\n-itzAmrit (4120) 1.10 kd \n\n SCRIM 2 \n-ItAin (2223) 2.06 kd \n-Okay!!! | cs.mone..(1776) 1.54 kd \n-pauL (1625) 1.18 kd\n \n CASUAL DEATHMATCH \n-hailzak (1010544) 2.12 kd\n-dTp_PhySco (967941) 1.84 kd\n-Kindle_YT (615222) 1.60 kd\n\n Arena 1 v 1 \n-SmokeBOB#dread... (138761) 2.06 kd\n-opguyyyy (106350) 5.36 kd\n-buddha (86471) 1.36\n\n Executes \n-r3kt3r (11107) 2.08 kd\n-uglyzoro (9131) 1.18 kd\n-RaNk3R (7208) 1.50 kd\n \nPUBLIC CASUAL \n-ホタル pnx- (147112) 1.14 kd\n-✪RAG3E2k (137053) 1.19 kd\n-haha what hhehehe..(118270) 1.56 kd \n \n ***NOTE:- This Bot Refreshes Every 24 Hours ***\n \n 𝐇𝐚𝐩𝐩𝐲 𝐆𝐚𝐦𝐢𝐧𝐠 \n-TEAM INDINET ```');

    
    
    }
})
















const PREFIX = '!';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'kick':

            if (message.member.roles.find(r => r.name === "GOD")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.react('✅');
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {
                            message.react('❌');
                            message.reply('i was Uynable to kick the user');
                            console.log(err);


                        });

                    } else {
                        message.react('❌');

                        message.reply("That Usser isint in the Server Right Now")


                    }
                } else {
                    message.react('❌');
                    message.reply('You Need to Specify A Person')

                }

            } else if (message.member.roles.find(r => r.name === "Head Admin")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.react('✅');
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {
                            message.react('❌');
                            message.reply('I was Unable to kick the user');
                            console.log(err);


                        });

                    } else {
                        message.react('❌');
                        message.reply("That User isint in the Server Right Now")


                    }
                } else {
                    message.react('❌');
                    message.reply('You Need to Specify A Person')

                }

            } else if (message.member.roles.find(r => r.name === "BOTS")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.react('✅');
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {
                            message.react('❌');
                            message.reply('I was Unable to kick the user');
                            console.log(err);


                        });

                    } else {
                        message.react('❌');
                        message.reply("That User isint in the Server Right Now")


                    }
                } else {
                    message.react('❌');
                    message.reply('You Need to Specify A Person')

                }

            } else {
                message.react('❌');
                return message.channel.send('```YOU DO NOT HAVE THE PERMISSION```')

            }
            break;
        case 'ban':
            if (message.member.roles.find(r => r.name === "GOD")) {



                const userr = message.mentions.users.first();
                if (userr) {
                    const member = message.guild.member(userr);
                    if (member) {

                        member.ban({ ression: 'You Were Banned From The Server' }).then(() => {
                            message.react('✅');
                            message.reply(`We Banned The Player ! ${userr.tag}`)




                        })
                    } else {
                        message.react('❌');
                        message.reply("That Usser isint in the Server Right Now")


                    }
                } else {
                    message.react('❌');
                    message.reply('You Need to Specify A Person')

                }

            } else if (message.member.roles.find(r => r.name === "Head Admin")) {

                const userr = message.mentions.users.first();
                if (userr) {
                    const member = message.guild.member(userr);
                    if (member) {

                        member.ban({ ression: 'You Were Banned From The Server' }).then(() => {
                            message.react('✅');
                            message.reply(`We Banned The Player ! ${userr.tag}`)




                        })
                    } else {
                        message.react('❌');
                        message.reply("That Usser isint in the Server Right Now")


                    }
                } else {
                    message.react('❌');
                    message.reply('You Need to Specify A Person')

                }







            } else if (message.member.roles.find(r => r.name === "BOTS")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.react('✅');
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {

                            message.reply('I was Unable to kick the user');
                            console.log(err);


                        });

                    } else {
                        message.react('❌');
                        message.reply("That User isint in the Server Right Now")


                    }
                } else {
                    message.react('❌');
                    message.reply('You Need to Specify A Person')

                }

            } else {
                message.react('❌');
                return message.channel.send('```YOU DO NOT HAVE THE PERMISSION```')

            }
            break;


  case 'poll':

 

      if(!args[1]){

        message.react('❌');
        message.channel.send('ATTACH A SENTENCE AFTER poll ')
        break;
      }
      let msgArgs = args.slice(1).join(" ");
      message.channel.send("**" + msgArgs + "**" ).then(messageReaction => {

        message.react('👍');
        message.react('👎');
        message.delete(3000).catch(console.error);


      });
      break;






    }





})

bot.login(process.env.token); 