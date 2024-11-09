'use client';
import { useEffect, useState } from "react";

export default function Song_Window_Heading(){

    const [heading, setHeading] = useState('Morning');
    useEffect(() => {
        const date = new Date().toLocaleTimeString('en-US', { hour12: false });
        console.log(date)
        if(parseInt(date.slice(0,2)) >= 12 && parseInt(date.slice(0,2)) < 17){
            setHeading('Afternoon');
        }else if(parseInt(date.slice(0,2)) >= 17){
            setHeading('Evening');
        }else{
            setHeading('Morning');
        }
    },[])

    return(
        <h1 className="text-4xl">its <span className="text-red-600">{heading}</span>, what u want to listen?</h1>
    )

}