import 
    RestManager 
from '../../rest/RestManager'

import { Client, Message } from 'eris'

export const search = async ({
    client,
    message,
    args
}: {
    client: Client;
    message: Message;
    args: string[];
}) => {
    if(!args[1]) return message.channel.createMessage({ content: ':x: Specify the search query.' })
    let query = `&search=${args[1]}`
    let parsed = await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": query }, searchQuery: query}).getfetch();
    let random = Math.floor(Math.random() * 30);
    await message.channel.createMessage({
        content: `${parsed.videos[random].url}`
    })
}