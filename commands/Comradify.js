const { Command } = require('discord-akairo')

class ComradifyCommand extends Command {
  constructor () {
    super('comrade', {
      aliases: ['comrade', 'comradify'],
      args: [
        {
          id: 'user'
        }
      ],
      category: 'moderation',
      channelRestriction: 'guild',
      clientPermissions: ['MANAGE_ROLES'],
      userPermissions: ['MANAGE_ROLES']
    })
  }

  exec (message, args) {
    return message.util.send(`COMRADIFYING ${args.user}!`)
      .then(sent => {
        const snowflake = args.user.slice(2, -1)

        const member = sent.guild.member(snowflake)

        if (member) {
          return message.util.send(`${args.user} has been made a Comrade.`)
        } else {
          return message.util.send('Invalid user. Make sure you\'re including the @ before their username.')
        }
      })
      .catch(error => {
        console.error('Unable to Comradify user:', error)
        return message.util.send('Oh boy you really broke something if you\'re seeing this error.')
      })
  }
}

module.exports = ComradifyCommand
