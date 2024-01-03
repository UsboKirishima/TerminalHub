import Express, { Response, Request } from "express";
import RestManager from "../rest/RestManager";

const app = Express();

app.use(Express.json());

/**
 * @endpoint /search
 * @description returns a list of infos
 * @body {"query": ""} (json)
 * @example curl -X GET https://../search -d '{"query": "step sister cum"}'
 * @response 
 *              {
 *                  "duration": "9:26",
 *                  "views": 91833,
 *                  "video_id": "6578c0e40a2cc",
 *                  "rating": 92.6471,
 *                  "ratings": 204,
 *                  "title": "Chinese big tits girl masterbate in her room and then fucked to squirt in batch room",
 *                  "url": "https://www.pornhub.com/view_video.php?viewkey=6578c0e40a2cc",
 *                  "default_thumb": "https://ei.phncdn.com/videos/202312/12/444648351/original/(m=eaf8Ggaaaa)(mh=vrQ-osn51QTUZeQ7)12.jpg",
 *                  "thumb": "https://ei.phncdn.com/videos/202312/12/444648351/original/(m=eaf8Ggaaaa)(mh=vrQ-osn51QTUZeQ7)16.jpg",
 *                  "publish_date": "2023-12-12 20:25:40",
 *                  "thumbs": [
 *                      {
 *                      "size": "320x240",
 *                      "width": "320",
 *                      "height": "240",
 *                      "src": "https://ei.phncdn.com/videos/202312/12/444648351/original/(m=eaf8Ggaaaa)(mh=vrQ-osn51QTUZeQ7)1.jpg"
 *                      },
 *                  ],
 *                  "tags": [
 *                      {
 *                      "tag_name": "中国"
 *                      },
 *                  
 *                  ],
 *                  "pornstars": [],
 *                  "categories": [
 *                      {
 *                      "category": "asian"
 *                      },
 *                  ],
 *                  "segment": "straight"
 *              },
 */
app.get('/search', async (req: Request, res: Response) => {
    let query = req.body.query || req.query;

    let commit = await new RestManager({ url: `https://www.pornhub.com/webmasters/search?`, params: { "search": query }, searchQuery: query}).getfetch();

    await res.send(commit);
})


app.listen(8080, async () => {
    await console.log('Ready!')
});