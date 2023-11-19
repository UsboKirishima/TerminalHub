import 
    RestManager 
from '../../rest/RestManager'

import { Client, Message, Embed } from 'eris'

export const search = async ({
    client,
    message,
    args,
    parsed
}: {
    client: Client;
    message: Message;
    args: string[];
    parsed: any;
}) => {
    let random = Math.floor(Math.random() * 30);

    await message.channel.createMessage({
        embeds: [
            {
                title: `${parsed.videos[0].title}`,
                url: `${parsed.videos[0].url}`,
                description: `   ⌤ ${parsed.videos[0].views} views   ♡ ${parsed.videos[0].ratings} likes  ∞ ${parsed.videos[0].publish_date.split(' ')[0]}  ☂ ${parsed.videos[0].duration}  ${parsed.videos[0].segment == "straight" ? "⚤ Straight" : "⚣ Gay"}\n\n`,
                image: {
                    url: `${parsed.videos[0].thumb}`
                },
                footer: {
                    text: `Page 1`
                }
            }
        ],
        components: [
            {
                type: 1,
                components: [
                    {
                        type: 2,
                        label: `⬅️`,
                        style: 2,
                        custom_id: `page_back`
                    },
                    {
                        type: 2,
                        label: `➡️`,
                        style: 1,
                        custom_id: `page_next`
                    },
                ]
            }
        ]
    })/*
    await message.channel.createMessage({
        content: `${parsed.videos[random].url}`
    })*/
}