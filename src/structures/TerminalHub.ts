import { TerminalOpts } from "../typings/opts";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { main } from "..";
import RestManager from "../rest/RestManager";
import RPC from "../rpc";
import { rpcClient, rpcOptions } from "..";

export let q = '';

/**
 * @method TerminalHub
 * @description This class comunicates with the RestManager and the Commands classes
 */
export default class TerminalHub {

    /**
     * @method searchQuery
     * @description It's the query required by search
     * @examples "hard" "cum" "horny"
     */
    public searchQuery: string;

    /**
     * @method query
     * @description It's the query required by search exported
     * @examples "&search=" + "hard" "cum" "horny"
     */
    public query: string;

    /**
     * @method TerminalHub.constructor
     * @param opts 
     */
    public constructor(opts: TerminalOpts) {
        /* this.searchQuery declaring */
        this.searchQuery = opts.searchQuery;

        /**
         * Here is added to the variable "this.searchQuery" the string "&search="
         * this thing is required because the URL requires the params
         * here I exported the variable "this.searchQuery" as a URL param
         */
        this.query = `&search=${this.searchQuery}`
    }

    /**
     * @param search()
     * @type public
     * @async true
     * @returns Promise<void>
     * @description This function asks to RestManager to fetch this url with these params.
     */
    public async search(): Promise<void> {
        q = this.query;
        
        await new RPC({
            buttons: [
              {
                url: "https://github.com/UsboKirishima/TerminalHub",
                label: "GitHub"
              }
            ],
            details: `Searching ${this.query}`,
            largeImageKey: 'image',
            state: `30 results`,
            client: rpcClient,
        }).connect();

        await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": this.query }, searchQuery: this.query}).search();
    }

    /**
     * @param image()
     * @type public
     * @async true
     * @returns Promise<void>
     * @description This function asks to RestManager to fetch this url with these params.
     */
    public async image(): Promise<void> {
        await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": this.query }, searchQuery: this.query}).image();
    }
}
