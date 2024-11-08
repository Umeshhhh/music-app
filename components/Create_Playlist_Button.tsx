'use client';
import { createVisible, playlist_items } from "@/store/atom/playlist_items";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";


export default function Create_Playlist_Button(){

    const [playlist, setPlaylist] = useAtom(playlist_items);
    const [visible, setVisible] = useAtom(createVisible);

    return(
        <button onClick={() => setVisible(true)} className='py-3 rounded-xl flex place-items-center w-4/5 ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-0 hover:bg-gray-100'>
            <span className='flex gap-3 place-items-center px-3'>
                <FontAwesomeIcon className='h-5 w-5' size='1x' color='black' icon={faCirclePlus} />
                <p>Create Playlist</p>
            </span>
        </button>
    )

}