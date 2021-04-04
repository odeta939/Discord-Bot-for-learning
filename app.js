const Discord = require('discord.js');
require('dotenv').config(); //initialises module dotenv using config()

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', ()=> {
    console.log('Bot is ready');
});


const questions = [
    'question one', 'question two', 'question three'
];

client.on('message', (msg)=>{
    if (msg.content === '?questions'){
        msg.channel.send(questions[Math.floor(Math.random() * questions.length)]);
    }
});