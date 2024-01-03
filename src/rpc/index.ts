import "dotenv/config"

import { Client, ClientOptions } from "discord-rpc";

import { RPCOptions } from "../typings/RPCOptions";


export default class RPC {


    public _buttons: { label: string; url: string; }[];

    public _details: string;

    public _largeImageKey: string;

    public _state: string;

    public client: Client;

    public constructor(opts: RPCOptions) {

        this._buttons = opts.buttons;

        this._details = opts.details;

        this._largeImageKey = opts.largeImageKey;

        this._state = opts.state;

        this.client = opts.client;

    }

    public async updateActivity() {

        await this.client.setActivity({
            buttons: this._buttons,
            details: this._details,
            largeImageKey: this._largeImageKey,
            state: this._state
        })
            .catch(async (error: Error) => await console.error(error))
    }

    public async connect() {
        await this.client.login({ clientId: process.env.APPLICATION_ID })
            .then(async () => await console.log("RPC Client connected successfully"))
            .catch(async (error: Error) => await console.error(error));
    }
}