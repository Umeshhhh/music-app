'use client';
import { useAtom } from "jotai";
import Playlist_List_Comp from "./Playlist_List_Comp";
import { selectedTab } from "@/store/atom/selectedTab";
import { playlist_items } from "@/store/atom/playlist_items";

type PlaylistType = {
    playlist: Array<{name: string, selected: boolean}>
}

export default function Playlist_list(){

    // const [playlistSelect, setPlaylistSelect] = useState({
    //     "Chill Vibes" : false,
    //     "Workout mix" : false
    // });
    const [playlist, setPlaylist] = useAtom(playlist_items);
    const [selectedItem, setSelectedItem] = useAtom(selectedTab);
    const newSelectedItem = selectedItem;
    newSelectedItem.playlist = playlist;
    setSelectedItem(newSelectedItem);

    return(
        <ul className='h-44 w-full flex flex-col gap-2 py-1 place-items-center overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-800'>
            {playlist.map(( (item, i) => {
                return(
                    <Playlist_List_Comp key={i} name={item.name} i={i} />
                )
            }))}
        </ul>
    )

}