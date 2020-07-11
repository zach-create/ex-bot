const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () => {

    console.log('This Bot is Online');
})

bot.on('message', msg => {
    if (msg.content === "Author") {
        msg.reply('Zach');

    }
})
bot.on('message', msg => {
    if (msg.content === "Version") {
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

const PREFIX = '+';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split("");
    switch (args[0]) {
        case 'kick':

            if (message.member.roles.find(r => r.name === "HEAD ADMIN")) {


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

            } else if (message.member.roles.find(r => r.name === "ADMIN")) {


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

                return message.channel.send('YOU DO NOT HAVE THE PERMISSION')

            }
        break;
        case 'ban':
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

            break;



    }





})


















bot.login(process.env.token); 