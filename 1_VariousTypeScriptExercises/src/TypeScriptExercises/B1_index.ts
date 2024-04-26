import { Artist } from "./B2_artist"

const artist = new Artist ("Peter Gabriel")

artist.addSong("Red Rain")
artist.addSong("Siko")
artist.addSong("Don't give up")

const result: string = artist.toString()
console.log(result)
