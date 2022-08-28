import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from '../structures/TerminalHub';
import { AnyNsRecord } from 'node:dns';

/**
 * @name Search
 * @description Search videos from PornHub
 * @param {()} run - Executes the command
*/
export class Search {
    public async run(): Promise<void> {
        let rl = readline.createInterface({ input, output });
        let answer: any;
        answer = await rl.question('Search: ').then(async (res) => {
            await new TerminalHub({ searchQuery: res }).search();
        });
    }
}