import Create_Playlist_Button from '@/components/Create_Playlist_Button';
import Create_Playlist_Comp from '@/components/Create_Playlist_Comp';
import Playlist_list from '@/components/Playlist_list';
import Side_List from '@/components/Side_List';
import Songs_Window from '@/components/Songs_Window';

export default function Home() {
  return (
    <div className="h-screen relative w-full bg-black">
      <Create_Playlist_Comp />
      <div className="h-full w-full grid grid-rows-6">
        <div className="h-full w-full row-span-5">
          <div className="h-full w-full grid grid-cols-12">
            {/* Sidebar */}
            <div className="col-span-2 w-full flex flex-col bg-white font-Neon border">
              <h1 className="text-black text-3xl py-3 pl-7 font-Rubik cursor-pointer w-fit">Musicfy</h1>
              <Side_List />
              <section className="flex flex-col gap-3 place-items-center">
                <h2 className="w-full font-semibold text-black text-xl text-left pl-8">Playlists</h2>
                <Create_Playlist_Button />
                <Playlist_list />
              </section>
            </div>

            {/* Main Content Area */}
            <div className="w-full col-span-10 bg-gray-100 overflow-y-auto">
              <Songs_Window />
            </div>
          </div>
        </div>

        {/* Bottom Player Bar */}
        <div className="row-span-1 z-50 bg-white flex items-center justify-center border">
          
        </div>
      </div>
    </div>
  );
}
