import { AkairoClient } from 'discord-akairo';
 
const client = new AkairoClient({
    ownerID: 'SNOWFLAKE',
    prefix: '!',
    commandDirectory: './src/commands/',
    inhibitorDirectory: './src/inhibitors/',
    listenerDirectory: './src/listeners/'
});
 
client.login('TOKEN').then(() => {
    console.log('Started up!');
});
