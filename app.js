const Discord = require('discord.js');
require('dotenv').config(); //initialises module dotenv using config()

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', ()=> {
    console.log('Bot is ready');
});

'ues strict';
let questions = require('./questions.json');
console.log(questions);



client.on('message', (msg)=>{
    if (msg.content === '?IoT'){
        msg.channel.send(questions[0][Math.floor(Math.random() * Object.keys(questions[0]).length)]);
    }else if(msg.content === "?OS"){
        msg.channel.send(questions[1][Math.floor(Math.random() * Object.keys(questions[1]).length)]);
    }
});