import Search_Browsing_List from "./Search_Browsing_List"


export default function Search_Browsing(){

    const browse_List = [
        {
            name: 'Hindi'
        },{
            name: 'Punjabi'
        },{
            name: 'Bhojpuri'
        },{
            name: 'Pop'
        },{
            name: 'Love'
        },{
            name: 'Trending'
        },{
            name: 'Mood'
        },{
            name: 'Party'
        },
    ]

    return(
        <section className="w-full h-full flex flex-col gap-2">
            <h1 className="text-2xl text-gray-700 font-semibold">Browse all</h1>
            <section className="w-full h-full grid grid-cols-3 gap-3">
                {browse_List.map((data,i) => {
                    return <Search_Browsing_List key={i} name={data.name} />
                })}
            </section>
        </section>
    )

}
