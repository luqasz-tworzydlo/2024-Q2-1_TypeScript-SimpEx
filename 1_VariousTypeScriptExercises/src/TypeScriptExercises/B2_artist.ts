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

    public toString(): string {
        return this.name + "\n" + this.songs
    }
}