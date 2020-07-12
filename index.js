const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzMxMDMwODY2MTg4MzA0Mzk1.XwiPHQ.rzdDoCcgdxL21Li5Rsk8-rcHy4A';

bot.on('ready', () => {

    console.log('This Bot is Online');
    bot.user.setActivity('68,396 Players',{ type: 'WATCHING'}).catch(console.error);

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


const PREFIX = '!';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
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
            case 'mvp':
                const embed = new Discord.MessageEmbed() 
                .setTitle('ALL THE MVP OF INDINET SERVER')
                .addField('Beautiful','https://www.youtube.com/watch?v=rSOzN0eihsE')
                .addField('SSJ_Japanese','https://www.youtube.com/watch?v=MeFoasNr3d4')
                .addField('Juice World Lucid Dream','https://www.youtube.com/watch?v=mzB1VGEGcSU')
                .addField('Good Life','https://www.youtube.com/watch?v=FG9M0aEpJGE')
                .addField('Gimme A Break','https://www.youtube.com/watch?v=N2yXLkg3Ltg')
                .addField('KSI Down Lite','https://www.youtube.com/watch?v=8F47-nKaTGE')
                .addField('Lite it Up','https://www.youtube.com/watch?v=r2LpOUwca94')
                .addField('This is  What you Cam','https://www.youtube.com/watch?v=kOkQ4T5WO9E')
                .addField('Goosebumps','https://www.youtube.com/watch?v=Dst9gZkq1a8')
                .addField('Falling','https://www.youtube.com/watch?v=L7mfjvdnPno')
                .addField('Two Feet','https://www.youtube.com/watch?v=T7K0pZ9tGi4')
                .addField('Pray That','https://www.youtube.com/watch?v=aT3rZOMLZCk')
                .addField('Frelisek Lutch','LINK')
                .addField('Let me love you','https://www.youtube.com/watch?v=euCqAq6BRa4')
                .addField('Without Me','https://www.youtube.com/watch?v=ZAfAud_M_mg')
                .addField('Can We Kiss Forever','https://www.youtube.com/watch?v=DKbfBSrjVHA')
                .addField('NCS Cyberpunk','https://www.youtube.com/watch?v=iqoNoU-rm14')
                .addField('Mia Khalifa','https://www.youtube.com/watch?v=GpSt-1FO5II')
                .addField('Satisfaya','https://www.youtube.com/watch?v=pfVODjDBFxU')
                .addField('Hislerim','https://www.youtube.com/watch?v=Mc2-YM9Bhu4')
                .addField('She inove it like','https://www.youtube.com/watch?v=Ci0WbaUH3no')
                .addField('All We Know','https://www.youtube.com/watch?v=7mWQ38SpEf8')
                .addField('Snotgun','LINK')
                .addField('Animals vs Bomb','https://www.youtube.com/watch?v=PEJEtIgSZfs')
                .addField('Clean Bandit','https://www.youtube.com/watch?v=8JnfIa84TnU')
                .addField('ibiza','https://www.youtube.com/watch?v=foE1mO2yM04')
                .addField('Calabria Firebeatz','https://www.youtube.com/watch?v=KynoltqOm8Q')
                .addField('Starboy feat','https://www.youtube.com/watch?v=34Na4j8AVgA')
                .addField('unknown brains superhero','https://www.youtube.com/watch?v=LHvYrn3FAgI')
                .addField('Faded','https://www.youtube.com/watch?v=60ItHLz5WEA')
                .addField('Heartless','https://www.youtube.com/watch?v=Gv_XBMrPvRw')
                .addField('In the End','https://www.youtube.com/watch?v=eVTXPUF4Oz4')
                .addField('Lean On','https://www.youtube.com/watch?v=YqeW9_5kURI')    
                .addField('The Chainsmokers','LINK')
                .addField('Bum Bum Tam Tam','https://www.youtube.com/watch?v=_P7S2lKif-A')
                .addField('This is what you','https://www.youtube.com/watch?v=kOkQ4T5WO9E')
                .addField('Thunder','https://www.youtube.com/watch?v=fKopy74weus')
                .addField('IamLegend','https://www.youtube.com/watch?v=BcqpllzJ_3g')
                .addField('Mari Don','https://www.youtube.com/watch?v=A_z5g0_hJN8')    
                .addField('Totat Overdose','https://www.youtube.com/watch?v=yklXwxjLCew')
                .addField('John Cena','https://www.youtube.com/watch?v=blIjjwVgUmE')
                .addField('Boneless','https://www.youtube.com/watch?v=gl2p4G3CUrI')
                .addField('Bootie','https://www.youtube.com/watch?v=dI_mRxrr2fk')
                .addField('Cant Remember','https://www.youtube.com/watch?v=o3mP3mJDL2k')
                .addField('Dancacuduro','LINK')    
                .addField('Desire','https://www.youtube.com/watch?v=GNb4FBawH_U')
                .addField('Drop','LINK')
                .addField('Dubstep','LINK')
                .addField('Simple the undertaker','https://www.youtube.com/watch?v=OZ1Xx84yJkw')
                .addField('Endless','LINK')
                .addField('Freak','LINK')    
                .addField('Gangster','LINK')
                .addField('Glad u came','https://www.youtube.com/watch?v=2ggzxInyzVE')
                .addField('Boneless','LINK')
                .addField('How we do','https://www.youtube.com/watch?v=PH34kMOjmQk')
                .addField('He is legend','https://www.youtube.com/watch?v=YELc8CGBA1Q')
                .addField('Love is gone','https://www.youtube.com/watch?v=beGjncfEPt8')    
                .addField('Hey Mister','LINK')
                .addField('Monster','https://www.youtube.com/watch?v=EHkozMIXZ8w')
                .addField('Smash','https://www.youtube.com/watch?v=W_BW9Sr9rx0')
                .addField('We Found Love','https://www.youtube.com/watch?v=tg00YEETFzg')
                .addField('Who','LINK')
                .addField('RapGod','https://www.youtube.com/watch?v=XbGs_qK2PQA')    
                .addField('Animals','https://www.youtube.com/watch?v=gCYcHz2k5x0')
                .addField('Countdown','https://www.youtube.com/watch?v=9jK-NcRmVcw')
                .addField('CTH','LINK')
                 
                 
                 
                .setColor(0xFEFA07)
                message.channel.send(embed);
                break;
            


    }





})

bot.login(token); 