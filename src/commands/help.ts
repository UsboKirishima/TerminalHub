export class Help {
    public async run(): Promise<void> {
        let help = await String.raw`
Format:
    th [--option]
    
Options:
    --help   :: Show all commands.
    --search :: Search video URLs from pornhub.
    --image  :: Search image URLs from pornhub.

Credits:
    - UsboKirishima
    - All contributors 

Copyright (c) 2022 usbo :: MIT License
`
        return await console.log(help);
    }
}