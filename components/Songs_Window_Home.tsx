import Playlist from "./Playlist"
import Song_Window_Heading from "./Song_Window_Heading"
import Popular_Songs_Comp from "./Popular_Songs_Comp"


export default function Songs_Window_Home(){

    const playlist_Data = [
        {
            id: 1,
            playlist_Name: "Bollywood Hot 50",
            playlist_Id: 5714603022,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/5ba519e87d4ef19ad28dd466d43f65bc/56x56-000000-80-0-0.jpg'
        },{
            id: 2,
            playlist_Name: "Hip Hop Hits",
            playlist_Id: 1677006641,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/affa7769af08f73d685857cd9235c4ae/56x56-000000-80-0-0.jpg'
        },{
            id: 3,
            playlist_Name: "Future Bass",
            playlist_Id: 6759880184,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/04cb4cf523298a93b59b6cbe33c0af90/56x56-000000-80-0-0.jpg'
        },{
            id: 4,
            playlist_Name: "Marshmello",
            playlist_Id: 7615944662,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg'
        },{
            id: 5,
            playlist_Name: "Justin Bieber",
            playlist_Id: 3133469542,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/137b746b44669e3501e159af6b9ca3c3/56x56-000000-80-0-0.jpg'
        },{
            id: 6,
            playlist_Name: "Alan Walker",
            playlist_Id: 5182240424,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/e5f8d099d5843c6dd5b80e6ec24e1270/56x56-000000-80-0-0.jpg'
        },{
            id: 7,
            playlist_Name: "Drake",
            playlist_Id: 4697063924,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/7e53b320b007027e5d79a1ae63be814b/56x56-000000-80-0-0.jpg'
        },{
            id: 8,
            playlist_Name: "Eminem",
            playlist_Id: 3645740262,
            playlist_Img_Url: 'https://e-cdns-images.dzcdn.net/images/playlist/9066bf8e1e68febbb1dd68a2d6c194cf/56x56-000000-80-0-0.jpg'
        }
    ]

    return(
        <div className="py-5 px-10 h-full w-full flex flex-col overflow-auto font-Neon">
            <div className="flex justify-between place-items-center">
                <Song_Window_Heading />
                <section className="flex gap-2 justify-center place-items-center">
                    <button className="px-4 py-2 bg-gray-300 text-black rounded-lg transition-all hover:bg-slate-800 hover:text-gray-100">Sign up</button>
                    <button className="px-5 py-2 bg-slate-800 text-gray-100 rounded-lg transition-all hover:bg-gray-300 hover:text-black">Sign in</button>
                </section>
            </div>
            <div className="h-full flex flex-col">
                <section className="h-2/5 py-5">
                    <section className="h-full w-full grid grid-cols-4 gap-2">
                        {playlist_Data.map((data) => {
                            return(
                                <Playlist key={data.id} img_src={data.playlist_Img_Url} playlist_id={data.playlist_Id} playlist_name={data.playlist_Name} />
                            )
                        })}
                    </section>
                </section>
                <section className="w-full h-full flex flex-col gap-7 mt-5">
                    <section>
                        <section className="flex justify-between place-items-center">
                            <h1 className="text-xl text-gray-700 font-semibold">Popular songs</h1>
                            <p className="h-fit w-fit text-md text-gray-600 cursor-pointer transition-all hover:underline hover:text-black">Show all</p>
                        </section>
                        <section className="h-full w-full grid grid-cols-5">
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                        </section>
                    </section>
                    <section>
                        <section className="flex justify-between place-items-center">
                            <h1 className="text-xl text-gray-700 font-semibold">Popular playlists</h1>
                            <p className="h-fit w-fit text-md text-gray-600 cursor-pointer transition-all hover:underline hover:text-black">Show all</p>
                        </section>
                        <section className="h-full w-full grid grid-cols-5">
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                            <Popular_Songs_Comp />
                        </section>
                    </section>
                </section>
            </div>
        </div>
    )

}