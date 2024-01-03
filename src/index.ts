import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import TerminalHub from './structures/TerminalHub';
import {
  Search,
  Image,
  Help
} from './commands';
import { Client } from 'discord-rpc';
import 'dotenv/config'
import RPC from './rpc';
import { RPCOptions } from './typings/RPCOptions';
import { q } from './structures/TerminalHub';

export const rpcClient = new Client({ transport: 'ipc' });

export let rpcOptions: RPCOptions = {
  buttons: [
    {
      url: "https://github.com/UsboKirishima/TerminalHub",
      label: "GitHub"
    }
  ],
  details: "idle",
  largeImageKey: 'image',
  state: 'by UsboKirishima',
  client: rpcClient,
}

rpcClient.on('ready', () => {

  if (q !== '') {
    rpcOptions = {
      buttons: [
        {
          url: "https://github.com/UsboKirishima/TerminalHub",
          label: "GitHub"
        }
      ],
      details: `Searching ${q}`,
      largeImageKey: 'image',
      state: `30 results`,
      client: rpcClient,
    }
  }

  new RPC(rpcOptions).updateActivity()
  setInterval(async () => {
    if (q !== '') {
      rpcOptions = {
        buttons: [
          {
            url: "https://github.com/UsboKirishima/TerminalHub",
            label: "GitHub"
          }
        ],
        details: `Searching: ${q.replace('&search=', '')}`,
        largeImageKey: 'image',
        state: `30 results`,
        client: rpcClient,
      }
    }
    new RPC(rpcOptions).updateActivity()
  }, 1000)
})

rpcClient.on('disconnect', () => {
  console.log("RPC Client disconnected, trying to reconnect after 10 seconds!")
  setTimeout(() => {
    new RPC(rpcOptions).connect()
  }, 10000)
})

/**
 * @method main
 * @description Run and handle all program.
 */
export const main = async () => {


  await new RPC(rpcOptions).connect()

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
