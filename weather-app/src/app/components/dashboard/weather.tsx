import React from 'react'
import { IoIosSunny } from "react-icons/io";
import { TbPercentage66 } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";

type WeatherData {
    name: string
    sys: { country: string; sunset: number }
    main: { temp: number; humidity: number }
    weather: { description: string; icon: string }[]
    wind: { speed: number }
}

type WeatherProps = {
    error: string
    loading: boolean
    data: WeatherData | null
}
function formatTime(timestamp: number): string {
    const date = new Date(timestamp * 1000)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function Weather({ error, loading, data }: WeatherProps) {
    return (
        <div className='card_outer pt-2 p-4'>
            <div className='card'>
                <div className='flex justify-between'>
                    <div className='leftside'>
                        <p className='text-3xl'>City Name, <b className='text-gray-400 font-light'>Uk</b> </p>
                        <div className='pt-3'>
                            <p className='text-5xl text-gray-400'>-C/32f</p>
                            <p className='text-xl pt-1'>clear sky</p>
                        </div>
                    </div>
                    <div className='rightside'>
                        <IoIosSunny className='text-[100px] text-amber-300' />
                    </div>
                </div>
                <div className='flex justify-between pt-4 text-gray-300'>
                    <span className='flex items-center gap-2'>
                        <TbPercentage66 />
                        80%
                    </span>
                    <span className='flex items-center gap-2'>
                        <IoSpeedometerOutline />
                        20 km/h
                    </span>
                    <span className='flex items-center gap-2'>
                        <IoTimerOutline />
                        7:45 PM
                    </span>
                </div>
            </div>
        </div>
    )
}
