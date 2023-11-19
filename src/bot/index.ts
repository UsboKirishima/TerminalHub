import {
    Client,
    GuildChannel,
    Message,
    ComponentInteraction
} from 'eris'

import "dotenv/config"

import {
    help,
    image,
    search
} from './commands'

import RestManager from '../rest/RestManager'

export interface parsedOpts {
    duration?: string;
    views?: number;
    video_id?: string;
    rating?: number;
    ratings?: number;
    title?: string;
    url?: string;
    default_thumb?: string;
    thumb?: string;
    publish_date?: string;
    thumbs?: object[];
    tags?: object[];
    pornstars?: object[];
    categories?: object[];
    segment?: string;
}

export const client: Client = new Client(
    /*token*/
    process.env.TOKEN

);

export const prefix: string = '?'

let porn_page: number = 0;
let parsed: any = {};

/* Handling */
client.on('messageCreate', async (message: Message) => {

    if (message.channel.type == 0 && !message.channel.nsfw) return;

    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
    switch (args[0]) {
        case 'search':
            if (!args[1]) return message.channel.createMessage({ content: ':x: Specify the search query.' })
            let query = `&search=${args.slice(1)}`
            let p = await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": query }, searchQuery: query }).getfetch();
            parsed = p;
            await search({ client, message, args, parsed })
            break;
        case 'image':
            await image({ client, message, args });
            break;
        case 'help':
            await help({ client, message });
            break;
        default:
            return;
            break;
    }
})

/*Handling buttons*/
client.on('interactionCreate', async (interaction) => {
    if (!(interaction instanceof ComponentInteraction)) return;

    if (interaction.data.component_type == 2 && interaction.data.custom_id == 'help') {
        interaction.createMessage('CIAO!');
        interaction.defer();
    }

    if (interaction.data.component_type == 2 && interaction.data.custom_id == 'page_next') {
        porn_page++;

        if(porn_page > 29) 
            porn_page = 0;

        await interaction.editParent({
            embeds: [
                {
                    title: `${parsed.videos[porn_page].title}`,
                    url: `${parsed.videos[porn_page].url}`,
                    description: `   ⌤ ${parsed.videos[porn_page].views} views   ♡ ${parsed.videos[porn_page].ratings} likes  ∞ ${parsed.videos[porn_page].publish_date.split(' ')[porn_page]}  ☂ ${parsed.videos[porn_page].duration}  ${parsed.videos[porn_page].segment == "straight" ? "⚤ Straight" : "⚣ Gay"}\n\n`,
                    image: {
                        url: `${parsed.videos[porn_page].thumb}`
                    },
                    footer: {
                        text: `Page ${porn_page + 1}`
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
                            style: porn_page == 0 ? 2 : 1,
                            custom_id: `page_back`
                        },
                        {
                            type: 2,
                            label: `➡️`,
                            style: porn_page == 29 ? 2 : 1,
                            custom_id: `page_next`
                        },
                    ]
                }
            ]
        })
    }

    if (interaction.data.component_type == 2 && interaction.data.custom_id == 'page_back') {
        porn_page--;

        if(porn_page < 0) 
            porn_page = 29;

        await interaction.editParent({
            embeds: [
                {
                    title: `${parsed.videos[porn_page].title}`,
                    url: `${parsed.videos[porn_page].url}`,
                    description: `   ⌤ ${parsed.videos[porn_page].views} views   ♡ ${parsed.videos[porn_page].ratings} likes  ∞ ${parsed.videos[porn_page].publish_date.split(' ')[porn_page]}  ☂ ${parsed.videos[porn_page].duration}  ${parsed.videos[porn_page].segment == "straight" ? "⚤ Straight" : "⚣ Gay"}\n\n`,
                    image: {
                        url: `${parsed.videos[porn_page].thumb}`
                    },
                    footer: {
                        text: `Page ${porn_page + 1}`
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
                            style: porn_page == 0 ? 2 : 1,
                            custom_id: `page_back`
                        },
                        {
                            type: 2,
                            label: `➡️`,
                            style: porn_page == 29 ? 2 : 1,
                            custom_id: `page_next`
                        },
                    ]
                }
            ]
        })
    }
})
client.connect()