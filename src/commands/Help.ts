/**
 * @name Help
 * @description Get all informations
 * @param {()} run - Executes the command
*/

export const help = String.raw`
Format:
    th [option]
    
Options:
    help   :: Show all commands.
    search :: Search video URLs from pornhub.
    image  :: Search image URLs from pornhub.

Credits:
    - UsboKirishima
    - All contributors 

Copyright (c) 2022 usbo :: MIT License
`

export class Help {
    public async run(): Promise<void> {

        return await console.log(help);
    }
}