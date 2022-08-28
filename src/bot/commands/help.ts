import {
    help as helpText
} from '../../commands/Help'

import { Client, Message } from 'eris'

export const help = async ({
    client,
    message
}: {
    client: Client;
    message: Message;
}) => {
    await client.createMessage(message.channel.id, `\`\`\`fix\n${helpText}`);
}