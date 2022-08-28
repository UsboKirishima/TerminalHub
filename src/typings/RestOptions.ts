/**
 * @method RestOptions
 * @param RestOptions
 * @url string
 * @params object
 * @headers string[]?
 * searchQuery string
 */
export interface RestOptions {
    url: string;
    params: object;
    headers?: string[];
    searchQuery: string;
}