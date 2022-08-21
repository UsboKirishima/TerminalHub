import { TerminalOpts } from "../typings/opts";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { main } from "..";
import RestManager from "../rest/RestManager";

export default class TerminalHub {

    public searchQuery: string;

    public query: string;

    public constructor(opts: TerminalOpts) {
        this.searchQuery = opts.searchQuery;
        this.query = `&search=${this.searchQuery}`

       
    }

    public async search(): Promise<void> {
        await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": this.query }, searchQuery: this.query}).search();
    }

    public async image(): Promise<void> {
        await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": this.query }, searchQuery: this.query}).image();
    }
}