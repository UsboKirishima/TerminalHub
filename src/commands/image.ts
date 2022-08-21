import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from '../structures/TerminalHub';

export class Image {
    public async run(): Promise<void> {
        let rl = readline.createInterface({ input, output });
        let answer: string;
        answer = await rl.question('Search: ').then(async (res) => {
            await new TerminalHub({ searchQuery: res }).image();
        });
    }
}