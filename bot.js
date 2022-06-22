require("dotenv").config();
const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {execLogs} = require("./execLogs.js");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', async msg => {
    // console.log("Messaged read:", msg)
    if (msg.author.bot) {
        return
    }

    if (msg.content.startsWith("//herokulogs")) {
        execLogs().then((logs) => {
            msg.reply(logs.join("\n"))
        }).catch((error) => {
            msg.reply(error)
        })
    }

})

client.login(process.env.HEROKU_LOG_BOT_TOKEN);