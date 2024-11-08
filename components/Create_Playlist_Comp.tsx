'use client';
import { createVisible, playlist_items } from "@/store/atom/playlist_items";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { useCallback, useState } from "react";

export default function Create_Playlist_Comp(){

    const [visible, setVisible] = useAtom(createVisible);
    const [playlist, setPlaylist] = useAtom(playlist_items);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');

    const callback = useCallback(() => {
        if(title.length > 0){
            setError(false);
        }
    },[title])

    const createPlaylist = () => {
        if(title.length != 0){
            setError(false);
            const newPlaylist = {
                name: title,
                selected: false
            };
            setPlaylist(prev => [...prev,newPlaylist]);
            setVisible(false);
            setTitle('');
        }else{
            setError(true);
        }
    }

    return(
        <>
            {visible && 
                <div className="absolute h-screen w-full z-40 bg-black bg-opacity-5 flex justify-center place-items-center font-Neon">
                    <section className="ring-1 ring-gray-300 rounded-xl w-1/3 bg-white px-10 py-5 flex flex-col justify-center place-items-center gap-2">
                        <section className="w-full flex justify-between place-items-center">
                            <h1 className="text-xl font-semibold text-left w-full">Create New Playlist</h1>
                            <FontAwesomeIcon onClick={() => {
                                setVisible(false);
                                setError(false);
                            }} className="w-5 h-5 rounded-xl bg-gray-50 p-2 cursor-pointer hover:bg-gray-200" icon={faXmark} />
                        </section>
                        <input onChange={(e) => setTitle(e.target.value)} className={`w-full p-3 mt-1 ring-1 rounded-xl outline-none transition-all  ${error ? 'ring-red-500' : 'ring-gray-200 focus:ring-gray-500 focus:shadow-lg'}`} type="text" placeholder="Playlist name" />
                        {error &&
                            <p className="w-full text-left text-sm text-red-500">*This field cannot be empty</p>
                        }
                        <button onClick={createPlaylist} className="ring-1 ring-gray-600 rounded-xl p-3 w-1/3 bg-white font-semibold transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-gray-300 hover:ring-0">Create</button>
                    </section>
                </div>
            }
        </>
    )

}
