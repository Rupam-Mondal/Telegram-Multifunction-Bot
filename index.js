const Telegrambot = require('node-telegram-bot-api')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config();

const Token = process.env.BOT_TOKEN;


const bot = new Telegrambot(Token , {polling:true});

bot.on('message', (msg) => {
    const text = msg.text;

    console.log("Message received: ", text);

    bot.sendMessage(msg.chat.id, "You said: " + text);
})

bot.onText(/\/joke/ , async function (msg){
    const joke = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const setup = joke.data.setup;
    const punchline = joke.data.punchline;
    console.log(joke)

    bot.sendMessage(msg.chat.id , setup);
    bot.sendMessage(msg.chat.id, '/n');
    bot.sendMessage(msg.chat.id, punchline);
})
