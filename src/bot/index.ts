import {
    Client,
    GuildChannel,
    Message
} from 'eris'

import "dotenv/config"

import {
    help,
    image
} from './commands'


export const client: Client = new Client(
    /*token*/
    process.env.TOKEN
    
); 

export const prefix: string = ':'

client.on('messageCreate', async ( message: Message ) => {
    //if(message.channel.type == 0 && message.channel.nsfw) return;
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
    switch(args[0]) {
        case 'search':
            await help({ client, message });
        break;
        case 'image':
            await image({ client, message, args });
        break;
        case 'help':

        break;
        default:

        break;
    } 
})
client.connect()