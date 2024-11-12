'use client';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Search_Browsing from "./Search_Browsing";
import Search_Searching from "./Search_Searching";

export default function Songs_Window_Search(){

    const [search, setSearch] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);

    useEffect(() => {
        if(search.length > 0) setSearchVisible(true)
        else setSearchVisible(false);
    },[search])

    return(
        <div className="py-5 px-10 h-full w-full flex flex-col overflow-auto font-Neon gap-3">
            <section className="relative w-full flex place-items-center group">
                <FontAwesomeIcon className="absolute left-3 h-1/2 w-5 border-r-2 pr-2 text-gray-400 transition-all group-hover:text-black" size="1x" icon={faMagnifyingGlass} />
                <input onChange={(e) => setSearch(e.target.value)} className="pl-14 pr-5 py-3 w-1/2 text-lg rounded-full transition-all ring-1 ring-gray-200 group-hover:ring-1 group-hover:ring-gray-700" type="text" placeholder="What do you want to play?" />
            </section>
            {!searchVisible &&
                <Search_Browsing />
            }
            {searchVisible &&
                <Search_Searching />
            }
        </div>
    )

}