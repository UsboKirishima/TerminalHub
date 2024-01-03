import { Client } from "discord-rpc";

export interface RPCOptions {
    buttons: { label: string; url: string; }[];
    details: string;
    largeImageKey: string;
    state: string;
    client: Client;
}