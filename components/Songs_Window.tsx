'use client';
import { selectedTab } from "@/store/atom/selectedTab";
import { useAtom } from "jotai"
import Songs_Window_Home from "./Songs_Window_Home";
import Songs_Window_Search from "./Songs_Window_Search";

export default function Songs_Window(){

    const [selected, setSelected] = useAtom(selectedTab);

    return(
        <div className="w-full h-full overflow-y-auto">
            {selected.menu.Home && 
                <Songs_Window_Home />
            }
            {selected.menu.Search && 
                <Songs_Window_Search />
            }
        </div>
    )

}

