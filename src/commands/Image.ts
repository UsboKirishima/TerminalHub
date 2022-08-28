import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from '../structures/TerminalHub';

/**
 * @name Image
 * @description Search images from PornHub
 * @param {()} run - Executes the command
*/
export class Image {
    public async run(): Promise<void> {
        let rl = readline.createInterface({ input, output });
        let answer: any;
        answer = await rl.question('Search: ').then(async (res) => {
            await new TerminalHub({ searchQuery: res }).image();
        });
    }
}