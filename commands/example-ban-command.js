import { Command } from 'discord-akairo';

export default class ExampleBanCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            channel: 'guild',
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                }
            ]
        });
    }

    async exec(message, { member }) {
        if (member.bannable) {
            await member.ban();
            return message.reply(`I have banned ${member}!`);
        }

        return message.reply(`I cannot ban ${member}!`);
    }
}