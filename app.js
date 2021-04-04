const Discord = require('discord.js');
require('dotenv').config(); //initialises module dotenv using config()

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', ()=> {
    console.log('Bot is ready');
});
let activeQuestion = null;

'ues strict';
let questions = require('./questions.json');
console.log(questions[0].question);



/*client.on('message', (msg)=>{
  //  if(msg.author == client.user){
        let randomIndex = Math.floor(Math.random() * Object.keys(questions).length);

        if (msg.content === '?question'){
            activeQuestion = questions[randomIndex];
            msg.channel.send(activeQuestion.question);
            msg.channel.send(activeQuestion.answers);
        
        }else if (activeQuestion != null){
            if(msg.author == client.user && msg.content === activeQuestion.rightAnswer){
                msg.channel.send("Answer is correct!");
            }else{
                msg.channel.send("Correct answer is: " +activeQuestion.rightAnswer)
        }
        activeQuestion = null;
    }
});
*/
client.on('message', (msg)=>{
    if(msg.author == client.user){
        return
    }
    let randomIndex = Math.floor(Math.random() * Object.keys(questions).length);
    if (msg.content === '?question'){
        activeQuestion = questions[randomIndex];
        msg.channel.send(activeQuestion.question);
        msg.channel.send(activeQuestion.answers);
    
    }else if (activeQuestion != null){
        if(msg.content == activeQuestion.rightanswer){
            msg.channel.send("Answer is correct!");
        }else{
            msg.channel.send("Correct answer is: " +activeQuestion.rightanswer)
    }
    activeQuestion = null;
  }

})