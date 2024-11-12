import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Popular_Songs_Comp(){

    return(
        <section className="h-fit group cursor-pointer rounded-xl transition-all hover:bg-black hover:bg-opacity-5">
            <section className="relative h-full w-full px-4 pt-4 flex">
                <img className="border h-40 w-full" src="vnsrvsin" alt="image" />
                <section className="absolute bottom-0 right-3 w-14 h-14 hidden justify-center place-items-center rounded-full bg-slate-800 group-hover:flex hover:cursor-pointer">
                    <FontAwesomeIcon className="text-white" size="2x" icon={faPlay} />
                </section>
            </section>
            <p className="px-4 text-sm">Hey vinsruvbsvub</p>
        </section>
    )

}