import { RestOptions } from "../typings/RestOptions";
import fetch, { Request } from "node-fetch";
import { URLSearchParams } from "url";
import snekfetch from "snekfetch";
import { blue, bold, cyan, green, grey, rainbow, yellow } from "colors";

/**
 * @method RestManager
 * @description This class makes HTTP requests to requested URLs from TerminalHub class
 */
export default class RestManager {

  /**
   * @method urlm
   * @description It's the url to fetch
   * @type public
   * @examples "https://google.com" "https://discord.com/api"
   */
  public urlm: any;

  /**
   * @method headers
   * @description The headers required by website to fetch
   * @type public
   * @examples {"Authorization": "Bearer token"} {"Content-Type": "application/json"}
   */
  public headers: any[];

  /**
   * @method params
   * @description The params of the URL to fetch
   * @type public
   * @examples "&search=lol" "&type=json"
   */
  public params: any;

  /**
   * @method searchQuery
   * @description The query of the param "&search=" required
   * @type public
   * @examples "hard" "cum" "romantic"
   */
  public searchQuery: string;

  /**
   * @method ResyManager.constructor
   * @param RestOptions 
   */
  public constructor(RestOptions: RestOptions) {

    /* this.urlm declaring */
    this.urlm = RestOptions.url;

    /* this.headers declaring */
    this.headers = RestOptions.headers;

    /* this.params declaring */
    this.params = RestOptions.params;

    /* this.searchQuery declaring */
    this.searchQuery = RestOptions.searchQuery;

  }

  /**
     * @param getFetch()
     * @type private
     * @async true
     * @description This function makes the http requestes and returns the json
     */
  public async getfetch() {
    let res = await fetch(this.urlm + this.searchQuery, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await res.json();
  }

  /**
     * @param search()
     * @type public
     * @async true
     * @description This function prints all videos urls fetched in terminal
     */
  public async search() {
    let parsed = await this.getfetch();
    await parsed.videos.forEach(async (info) => {

      let categories = "";
      await info.categories.forEach(async (category) => {
        categories += `${category.category} `;
      })

      console.log(yellow(`\n☆┃ ${info.title}`));
      console.log(blue(`✈┃ ${info.url}`));
      console.log(green(`❖┃ ${categories}`));
      console.log(cyan(`   ⌤ ${info.views} views   ♡ ${info.ratings} likes  ∞ ${info.publish_date.split(' ')[0]}  ☂ ${info.duration}  ${info.segment == "straight" ? "⚤ Straight" : "⚣ Gay"}\n\n`));
    })

    //return process.exit(0);
  }

  /**
     * @param image()
     * @type public
     * @async true
     * @description This function prints all images urls fetched in terminal
     */
  public async image() {
    let parsed = await this.getfetch();
    await parsed.videos.forEach(async (info) => {

      let categories = "";
      await info.categories.forEach(async (category) => {
        categories += `${category.category} `;
      })

      console.log(yellow(`\n☆┃ ${info.title}`));
      console.log(blue(`✈┃ ${info.thumb}`));
      console.log(green(`❖┃ ${categories}`));
      console.log(cyan(`   ⌤ ${info.views} views   ♡ ${info.ratings} likes  ∞ ${info.publish_date.split(' ')[0]}  ☂ ${info.duration}  ${info.segment == "straight" ? "⚤ Straight" : "⚣ Gay"}\n\n`));

    })

    //return process.exit(0);
  }
}
