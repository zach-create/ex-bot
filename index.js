const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () => {

    console.log('This Bot is Online');
    bot.user.setActivity('70,238 Players', { type: 'WATCHING' }).catch(console.error);

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
        msg.reply('Hello Mate!');

    }
})
bot.on('message', msg => {
    if (msg.content === "Hello") {
        msg.reply('Hello Mate!');

    }
})

bot.on('message', msg => {
    if (msg.content === "hello") {
        msg.reply('Hello Mate!');

    }
})



bot.on('message', msg => {
    if (msg.content === "BYE") {
        msg.reply('BYE Hope to See You Soon');

    }
})
bot.on('message', msg => {
    if (msg.content === "Bye") {
        msg.reply('BYE Hope to See You Soon');

    }
})
bot.on('message', msg => {
    if (msg.content === "bye") {
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
        msg.channel.send(' ```𝐈𝐍𝐃𝐈𝐍𝐄𝐓 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐁𝐎𝐓  \n 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘈𝘥𝘮𝘪𝘯 \n -.kick @user_name \n -.ban @user_name \n \n 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘈𝘓𝘓 \n -.ranks - To get a Link To See Ranks \n -Some Greeting Commands  HELLO BYE \n\n ** Any Suggestions Related to BOT  Are Happly Taken \n- 𝐙𝐚𝐜𝐡 | 𝐀𝐝𝐦𝐢𝐧  \n \n \n 𝐇𝐚𝐩𝐩𝐲 𝐆𝐚𝐦𝐢𝐧𝐠 \n-TEAM INDINET  ```');

    }
})



bot.on('message', msg => {
    if (msg.content === ".top") {
        msg.channel.send(' ```𝐈𝐍𝐃𝐈𝐍𝐄𝐓 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐁𝐎𝐓  \n TOP PLAYERS OF EACH SERVERS \n RETAKE 1 \n-\n-\n-\n REATKE RUSH \n-\n-\n-\n SCRIM 2-\n-\n-\n \n CASUAL DEATHMATCH \n-\n-\n-\n Arena 1 v 1 \n-\n-\n-\n Executes \n-\n-\n-\n PUBLIC CASUAL-\n-\n-\n  𝐇𝐚𝐩𝐩𝐲 𝐆𝐚𝐦𝐢𝐧𝐠 \n-TEAM INDINET ```');

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
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {

                            message.reply('i was Uynable to kick the user');
                            console.log(err);


                        });

                    } else {

                        message.reply("That Usser isint in the Server Right Now")


                    }
                } else {
                    message.reply('You Need to Specify A Person')

                }

            } else if (message.member.roles.find(r => r.name === "Head Admin")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {

                            message.reply('I was Unable to kick the user');
                            console.log(err);


                        });

                    } else {

                        message.reply("That User isint in the Server Right Now")


                    }
                } else {
                    message.reply('You Need to Specify A Person')

                }

            } else if (message.member.roles.find(r => r.name === "BOTS")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {

                            message.reply('I was Unable to kick the user');
                            console.log(err);


                        });

                    } else {

                        message.reply("That User isint in the Server Right Now")


                    }
                } else {
                    message.reply('You Need to Specify A Person')

                }

            } else {

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
                            message.reply(`We Banned The Player ! ${userr.tag}`)




                        })
                    } else {

                        message.reply("That Usser isint in the Server Right Now")


                    }
                } else {
                    message.reply('You Need to Specify A Person')

                }

            } else if (message.member.roles.find(r => r.name === "Head Admin")) {

                const userr = message.mentions.users.first();
                if (userr) {
                    const member = message.guild.member(userr);
                    if (member) {

                        member.ban({ ression: 'You Were Banned From The Server' }).then(() => {
                            message.reply(`We Banned The Player ! ${userr.tag}`)




                        })
                    } else {

                        message.reply("That Usser isint in the Server Right Now")


                    }
                } else {
                    message.reply('You Need to Specify A Person')

                }







            } else if (message.member.roles.find(r => r.name === "BOTS")) {


                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {

                        member.kick('You Were Been Kicked from Indinet Official Discord Server').then(() => {
                            message.reply(`Successfully Kicked  ${user.tag}`);
                        }).catch(err => {

                            message.reply('I was Unable to kick the user');
                            console.log(err);


                        });

                    } else {

                        message.reply("That User isint in the Server Right Now")


                    }
                } else {
                    message.reply('You Need to Specify A Person')

                }

            } else {

                return message.channel.send('```YOU DO NOT HAVE THE PERMISSION```')

            }
            break;

    }





})

bot.login(process.env.token); 