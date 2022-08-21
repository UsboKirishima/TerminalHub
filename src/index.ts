import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from './structures/TerminalHub';
import {
  Search,
  Image,
  Help
} from './commands';

export const main = async () => {

  await console.clear();

  const prefix = '--';

  switch (process.argv[2]) {
    case '--help': {
      return await new Help().run();
    }
    break;
    case '--search': {
      return await new Search().run();
    }
    break;
    case '--image': {
      return await new Image().run();
    }
    break;
    default: {
      console.log('Invalid option: ' + process.argv[2].replace('--', ''));
    }
    break;
  }

  await process.exit(1);
}

(async () => {
  return await main();
})();
