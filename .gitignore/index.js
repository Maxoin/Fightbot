const Discord = require('discord.js');

var bot = new Discord.Client();
var randnum = 0;

var prefix = ("!");

bot.on('ready',() => {
    console.log('Bot Ready')

})
bot.login ('NDUyNDM3MDM3MDEwOTExMjMz.DfQUWA.3Ot3diWDLOW_F--afM8lysQCcng');

bot.on('message', message => {

    if (message.content === "*e"){
        random();
        
        if (randnum == 1){
            message.reply("Tu esquive l'attaque")
            console.log("1"); 
        }
        if (randnum == 2){
            message.reply("Tu te prend l'attaque '^'")
            console.log("2"); 
        }
    }
        
}


    
)

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1));
}
