'use client';
import { selectedTab } from "@/store/atom/selectedTab";
import { useAtom } from "jotai";

export default function Playlist_List_Comp({ name, i } : { name: string, i: number }){

    const [selected, setSelected] = useAtom(selectedTab);

    const clickFunction = (optionClicked : number) => {
        const newSelected = {
            "menu": {
                "Home" : true,
                "Search" : false,
                "Library" : false
            },
            "playlist" : selected.playlist
        };
        newSelected.menu.Home = false;
        newSelected.menu.Library = false;
        newSelected.menu.Search = false;
        newSelected.playlist.map((item,i) => {
            if(i == optionClicked){
                item.selected = true;
            }else{
                item.selected = false;
            }
        })
        setSelected(newSelected);
    }

    return(
        <li onClick={() => clickFunction(i)} className={`py-2 w-4/5 text-center ring-1 ring-gray-100 cursor-pointer rounded-lg transition-all ${selected.playlist[i].selected ? 'bg-gray-200 font-semibold shadow-lg tracking-wider ring-0' : 'hover:shadow-lg hover:ring-0 hover:bg-gray-100'}`}>
            <p>{name.length > 15 ? name.slice(0,15) + "..." : name}</p>
        </li>
    )

}