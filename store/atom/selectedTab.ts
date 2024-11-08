import { atom } from "jotai";

type SelectedType = {
    "menu" : MenuType,
    "playlist" : PlaylistType
}

type MenuType = {
    "Home" : boolean,
    "Search": boolean,
    "Library": boolean
}

type PlaylistType = Array<{ name: string; selected: boolean }>;


export const selectedTab = atom<SelectedType>({
    "menu": {
        "Home" : true,
        "Search" : false,
        "Library" : false
    },
    "playlist" : []
});

