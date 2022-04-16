import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from './structures/TerminalHub';

export const main = async () => {
    let rl = readline.createInterface({ input, output });
    let answer: string;

    answer = await rl.question('Search: ').then(async (res) => {
        await new TerminalHub({ searchQuery: res });
    });
}

(async () => {
    await main();
})();