import Song_Window_Heading from "./Song_Window_Heading";

export default function Songs_Window(){

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
        },
    ]

    return(
        <div className="py-5 px-10 h-full flex flex-col overflow-auto font-Neon">
            <div className="flex justify-between place-items-center">
                <Song_Window_Heading />
                <section className="flex gap-2 justify-center place-items-center">
                    <button className="px-4 py-2 bg-gray-300 text-black rounded-lg transition-all hover:bg-slate-800 hover:text-gray-100">Sign up</button>
                    <button className="px-5 py-2 bg-slate-800 text-gray-100 rounded-lg transition-all hover:bg-gray-300 hover:text-black">Sign in</button>
                </section>
            </div>
            <div className="h-full">
                <section className="h-2/5 py-5 grid grid-rows-2 gap-4">
                    <section className="row-span-1 grid grid-cols-4">
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                    </section>
                    <section className="row-span-1 grid grid-cols-4">
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                        <section className="w-60 flex rounded-xl place-items-center col-span-1 bg-slate-800 text-white shadow-xl ring-0 outline-none shadow-gray-300 overflow-hidden">
                            <section className="overflow-hidden"><img className="h-15 w-15 " src="https://e-cdns-images.dzcdn.net/images/playlist/de993cb0fd9a817af0283a578bf2060b/56x56-000000-80-0-0.jpg" alt="" /></section>
                            <p className="px-3">Marshmello</p>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    )

}

