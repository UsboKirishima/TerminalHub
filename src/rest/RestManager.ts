import { RestOptions } from "../typings/RestOptions";
import fetch, { Request } from "node-fetch";
import { URLSearchParams } from "url";
import snekfetch from "snekfetch";

export default class RestManager {

    public urlm: any;

    public headers: any[];

    public params: any;
    
    public searchQuery: string;

    public constructor(RestOptions: RestOptions) {
        this.urlm = RestOptions.url;
        this.headers = RestOptions.headers;
        this.params = RestOptions.params;
        this.searchQuery = RestOptions.searchQuery;

        (async () => {
            

            let res = await fetch(this.urlm + this.searchQuery, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let parsed = await res.json().then(async (videos) => {
                await videos.videos.forEach(async (info) => {
                    console.log(`\n${info.title}\n${info.url}\n\n`);
                })
            })
        })();

    }
}