const {AkairoClient} = require('discord-akairo')
const config = require('./config/config')

const client = new AkairoClient({
  ownerID: config.ownersArr,
  prefix: '!',
  handleEdits: true,
  commandUtil: true,
  commandUtilLifetime: 600000,
  commandDirectory: './commands/',
  inhibitorDirectory: './inhibitors/',
  listenerDirectory: './listeners/'
}, {
  disableEveryone: true
})

client.login(config.clientToken)
