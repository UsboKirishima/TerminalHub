import {
    RestManager
} from '../../rest/RestManager'

import { Client, Message } from 'eris'

export const image = async ({
    client,
    message,
    args
}: {
    client: Client;
    message: Message;
    args: string[];
}) => {
    let query = `&search=${args[1]}`
    let parsed = await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": query }, searchQuery: query}).getFetch();
    let random = Math.floor(Math.random() * 30);
    await message.channel.createMessage({
        content: `${parsed.data.videos[random].thumb}`
    })
}