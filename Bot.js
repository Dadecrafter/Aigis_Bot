const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === '+pong') {
    msg.reply('ping');
  }
});

client.on('message', msg => {
  if (msg.content === '+muda') {
    msg.reply('muda muda muda muda muda muda muda muda muda muda muda muda!');
  }
});

client.on('message', msg => {
  if (msg.content === '+help') {
    msg.reply('+ping=pong, +pong=ping, +muda=Muda twelve times, +help displays commands.')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 1+1?') {
    msg.reply('The answer is 2!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 2+1?') {
    msg.reply('The answer is 23!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 1+2?') {
    msg.reply('The answer is 3!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 3+1?') {
    msg.reply('The answer is 4!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 1+3?') {
    msg.reply('The answer is 4!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 3+2?') {
    msg.reply('The answer is 5!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 2+3?') {
    msg.reply('The answer is 5!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 2+2?') {
    msg.reply('The answer is 4!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 3+3?') {
    msg.reply('The answer is 6!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 4+4?') {
    msg.reply('The answer is 8!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Whats 5+5?') {
    msg.reply('The answer is 10!')
  }
});

client.on('message', msg => {
  if (msg.content === '+Bee Movie Script') {
    msg.reply('According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees dont care what humans think is impossible')
  }
});
client.login(auth.token);
