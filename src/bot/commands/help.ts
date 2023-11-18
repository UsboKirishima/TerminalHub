import {
    prefix as pr
} from '..'

import { Client, Message } from 'eris'

let prefix: string = pr;
if(prefix == undefined || prefix == null) prefix = '';

const helpText = String.raw`
Format:
    ${prefix}[command] [query]
    
Commands:
    ${prefix}help   :: Show all commands.
    ${prefix}search :: Search video URLs from pornhub.
    ${prefix}image  :: Search image URLs from pornhub.

Credits:
    - UsboKirishima
    - All contributors 

Copyright (c) 2023 usbo :: MIT License
`

/**
 * @param help
 * @description Returns all the commands 
 */
export const help = async ({
    client,
    message
}: {
    client: Client;
    message: Message;
}) => {
    await client.createMessage(message.channel.id, `\`\`\`fix\n${helpText}\`\`\``);
}