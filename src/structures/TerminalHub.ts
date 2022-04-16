import { TerminalOpts } from "../typings/opts";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { main } from "..";
import RestManager from "../rest/RestManager";

export default class TerminalHub {

    public searchQuery: string;

    public constructor(opts: TerminalOpts) {
        this.searchQuery = opts.searchQuery;
        let query = `&search=${this.searchQuery}`

        new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": query }, searchQuery: query});
    }
}