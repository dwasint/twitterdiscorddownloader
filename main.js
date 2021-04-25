const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json')
const youtubedl = require('youtube-dl-exec');
const { ExecutionContext } = require('puppeteer');
const prefix = config.prefix;


client.once('ready', () => {
    console.log('Bot is running')
});

client.on('message', message =>{
    if(message.author.bot) 
        return;
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const tlink = message.content;
    const linkData = 0;

    if (command === 'ping'){
        message.channel.send('https://cdn.discordapp.com/attachments/800400767030788116/832953769939173426/EzD0BOkVEAgG-JY.png')
    }
    if (command === 'prefix'){
        const filter = m => m.author.id === message.author.id;
        
    }
    if (message.content.includes('https://twitter.com/')){
        console.log('link detected')
        console.log(tlink)
        youtubedl(tlink, {
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
            getUrl: true,
            referer: tlink
          })
          .then(output => message.channel.send(output))
    }
});

client.login(config.token)

