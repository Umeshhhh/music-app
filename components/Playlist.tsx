

export default function Playlist({img_src, playlist_name, playlist_id}:{img_src: string, playlist_name: string, playlist_id: number}){
    return(
        <section className="h-full flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden cursor-pointer transition-all hover:bg-slate-700">
            <section className="h-full w-2/5 overflow-hidden"><img className="h-full w-full " src={img_src} alt="" /></section>
            <p className="px-3 w-full text-lg">{playlist_name}</p>
        </section>
    )
}
