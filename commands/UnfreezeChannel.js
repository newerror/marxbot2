const {Command} = require('discord-akairo')

class UnfreezeChannelCommand extends Command {
  constructor() {
    super('unfreeze', {
      aliases: ['unfreeze', 'unlock', 'unpause'],
      category: 'moderation',
      channelRestriction: 'guild',
      clientPermissions: ['MANAGE_CHANNELS'],
      userPermissions: ['MANAGE_CHANNELS']
    })
  }

  exec (message) {
    const channel = message.channel

    return message.util.reply(`Unfreezing ${message.channel}...`)
      .then(sent => {
        const role = sent.guild.roles.find('name', 'Comrades')

        sent.channel.overwritePermissions(role, {
          SEND_MESSAGES: true
        })

        return message.util.reply(`Unfroze ${message.channel}.`)
      })
  }
}

module.exports = UnfreezeChannelCommand
