const {Command} = require('discord-akairo')

class FreezeChannelCommand extends Command {
  constructor () {
    super('freeze', {
      aliases: ['freeze', 'lock', 'pause'],
      category: 'moderation',
      channelRestriction: 'guild',
      clientPermissions: ['MANAGE_CHANNELS'],
      userPermissions: ['MANAGE_CHANNELS']
    })
  }

  exec (message) {
    return message.util.reply(`Freezing ${message.channel}...`)
      .then(sent => {
        const role = sent.guild.roles.find('name', 'Comrades')

        const prefix = message.util.prefix

        sent.channel.overwritePermissions(role, {
          SEND_MESSAGES: false
        })

        return message.util.reply(`Froze ${message.channel}. Type ${prefix}unfreeze to unfreeze.`)
      })
  }
}

module.exports = FreezeChannelCommand
