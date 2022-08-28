import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from './structures/TerminalHub';
import {
  Search,
  Image,
  Help
} from './commands';

/**
 * @method main
 * @description Run and handle all program.
 */
export const main = async () => {

  await console.clear();


  switch (process.argv[2]) {
    /**
    * @method help
    * @description Show the all commands avaibles
    */
    case 'help': {
      return await new Help().run();
    }
    /**
    * @method search
    * @description Search video URLs from PornHub
    */
      break;
    case 'search': {
      return await new Search().run();
    }
    /**
    * @method image
    * @description Search images from PornHub
    */
      break;
    case 'image': {
      return await new Image().run();
    }
      break;
    default: {
      console.log('Invalid option: ' + process.argv[2]);
    }
      break;
  }

  await process.exit(1);
}

(async () => {
  return await main();
})();
