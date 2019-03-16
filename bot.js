const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("549902395078082562")
setInterval(function() {
channel.send(`اف اف يالسبام حرريقة كريدت يجي بالهبل اف اف يالكريدت اللي يستناني`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
