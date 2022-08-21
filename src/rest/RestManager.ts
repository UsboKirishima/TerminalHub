import { RestOptions } from "../typings/RestOptions";
import fetch, { Request } from "node-fetch";
import { URLSearchParams } from "url";
import snekfetch from "snekfetch";

export default class RestManager {

  public urlm: any;

  public headers: any[];

  public params: any;

  public searchQuery: string;

  public constructor(RestOptions: RestOptions) {

    this.urlm = RestOptions.url;

    this.headers = RestOptions.headers;

    this.params = RestOptions.params;

    this.searchQuery = RestOptions.searchQuery;

  }

  private async getfetch() {
    let res = await fetch(this.urlm + this.searchQuery, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await res.json();
  }

  public async search() {
    let parsed = await this.getfetch();
    await parsed.videos.forEach(async (info) => {
      return await console.log(`\n${info.title}\n${info.url}\n\n`);
    })
  }

  public async image() {
    let parsed = await this.getfetch();
    await parsed.videos.forEach(async (info) => {
      return await console.log(`\n${info.title}\n${info.thumb}\n\n`);
    })
  }
}
