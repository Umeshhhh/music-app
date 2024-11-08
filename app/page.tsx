import Create_Playlist_Button from '@/components/Create_Playlist_Button';
import Create_Playlist_Comp from '@/components/Create_Playlist_Comp';
import Playlist_list from '@/components/Playlist_list';
import Side_List from '@/components/Side_List';

export default function Home() {

  return (
    <div className="h-screen relative w-full bg-black">
      <Create_Playlist_Comp />
      <div className="h-full w-full grid grid-rows-6">
        <div className="h-full w-full row-span-5">
          <div className="h-full max-w-full grid grid-flow-col grid-col-9">
            <div className="col-span-1 flex flex-col bg-white font-Neon">
              <h1 className='text-black text-3xl py-3 pl-7 font-Rubik cursor-pointer w-fit'>Musicfy</h1>
              {/* <hr></hr> */}
              <Side_List />
              <section className='flex flex-col gap-3 place-items-center'>
                <h2 className='w-full font-semibold text-black text-xl text-left pl-8'>Playlists</h2>
                <Create_Playlist_Button />
                <Playlist_list />
              </section>
            </div>
            <div className="col-span-8 border bg-blue-50">
              
            </div>
          </div>
        </div>
        <div className="row-span-1 z-50">

        </div>
      </div>
    </div>
  );
}
