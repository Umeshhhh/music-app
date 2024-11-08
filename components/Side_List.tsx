'use client';
import { playlist_items } from "@/store/atom/playlist_items";
import { selectedTab } from "@/store/atom/selectedTab";
import { faHouse, faLayerGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { useState } from "react";

type PlaylistType = {
    playlist: Array<{name: string, selected: boolean}>
}

export default function Side_List(){

    // const [selected, setSelected] = useState<Tab>({
    //     "Home" : true,
    //     "Library" : false,
    //     "Search" : false
    // });

    const [selected, setSelected] = useAtom(selectedTab);
    const [shake, setShake] = useState<boolean>();
    const [playlist, setPlaylist] = useAtom(playlist_items);

    const clickFunction = (optionClicked : number) => {
        const newSelected = {
            "menu": {
                "Home" : true,
                "Search" : false,
                "Library" : false
            },
            "playlist" : selected.playlist
        };
        if (optionClicked == 0) {
            newSelected.menu.Home = true;
            newSelected.menu.Library = false;
            newSelected.menu.Search = false;
        } else if (optionClicked == 1) {
            newSelected.menu.Home = false;
            newSelected.menu.Library = false;
            newSelected.menu.Search = true;
        } else {
            newSelected.menu.Home = false;
            newSelected.menu.Library = true;
            newSelected.menu.Search = false;
        }
        newSelected.playlist = playlist;
        newSelected.playlist.map(item => {
            item.selected = false;
        })
        setShake(true);
        setTimeout(() => {
            setShake(false);
        },500)
        setSelected(newSelected);
    }

    return(
        <section className='w-full py-2 flex justify-center'>
            <ul className='w-full flex flex-col place-items-center gap-3 py-1'>
                <li onClick={() => clickFunction(0)} className={`flex gap-5 place-items-center p-2 pl-3 w-4/5 rounded-xl transition-all cursor-pointer ${selected.menu.Home == true ? 'bg-gray-200 font-semibold shadow-lg' : 'hover:bg-gray-100 hover:shadow-xl'}`}>
                    <FontAwesomeIcon className='h-5 w-5' size='1x' bounce={selected.menu.Home == true ? shake : false} color='black' icon={faHouse} />
                    <p>Home</p>
                </li>
                <li onClick={() => clickFunction(1)} className={`flex gap-5 place-items-center p-2 pl-3 w-4/5 rounded-xl transition-all cursor-pointer ${selected.menu.Search == true ? 'bg-gray-200 font-semibold shadow-lg' : 'hover:bg-gray-100 hover:shadow-xl'}`}>
                    <FontAwesomeIcon className='h-5 w-5' size='1x' bounce={selected.menu.Search == true ? shake : false} color='black' icon={faSearch} />
                    <p>Search</p>
                </li>
                <li onClick={() => clickFunction(2)} className={`flex gap-5 place-items-center p-2 pl-3 w-4/5 rounded-xl transition-all cursor-pointer ${selected.menu.Library == true ? 'bg-gray-200 font-semibold shadow-lg' : 'hover:bg-gray-100 hover:shadow-xl'}`}>
                    <FontAwesomeIcon className='h-5 w-5' size='1x' bounce={selected.menu.Library == true ? shake : false} color='black' icon={faLayerGroup} />
                    <p>Your Library</p>
                </li>
            </ul>
        </section>
    )
}