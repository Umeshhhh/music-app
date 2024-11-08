import { atom } from "jotai";


export const playlist_items = atom([
    {
        name: "Chill Vibes",
        selected : false
    },
    {
        name: "Workout mix",
        selected : false
    }
])

export const createVisible = atom(false);