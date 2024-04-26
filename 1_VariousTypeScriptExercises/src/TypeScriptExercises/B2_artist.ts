export class Artist {
    private name: string
    private songs: string[]

    constructor(name: string) {
        this.name = name
        this.songs = []
    }

    public addSong(title: string) {
        this.songs.push(title)
    }

    public removeSong(title: string) {
        this.songs = this.songs.filter(song => song !== title);
    }

    // Our second [improved] toString Method
    public toString(): string {
        const formattedSongs = this.songs.map(song => ` -> ${song}`).join("\n");
        return `=> Our artist: ${this.name}\n=> List of songs:\n${formattedSongs}\n`;
    }

    // Our first toString Method
    /*
    public toString(): string {
        return `=> Our artist: ${this.name}\n=> List of songs:\n${this.songs.join("\n")}`;
    }
    */
}