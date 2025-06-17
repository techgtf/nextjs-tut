import React, { JSX } from 'react'
import { WiHumidity } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";
import {
    WiDaySunny,
    WiCloudy,
    WiRain,
    WiThunderstorm,
    WiSnow,
    WiFog,
} from 'react-icons/wi'
import Loader from '../common/loader';

const weatherIcons: Record<string, JSX.Element> = {
    Clear: <WiDaySunny className="text-[100px] text-yellow-400" />,
    Clouds: <WiCloudy className="text-[100px] text-gray-300" />,
    Rain: <WiRain className="text-[100px] text-blue-400" />,
    Thunderstorm: <WiThunderstorm className="text-[100px] text-purple-500" />,
    Snow: <WiSnow className="text-[100px] text-white" />,
    Mist: <WiFog className="text-[100px] text-gray-400" />,
    Smoke: <WiFog className="text-[100px] text-gray-400" />,
    Haze: <WiFog className="text-[100px] text-gray-400" />,
    Fog: <WiFog className="text-[100px] text-gray-400" />,
    Drizzle: <WiRain className="text-[100px] text-blue-300" />,
}

type WeatherData = {
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

function formatTime(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}


export default function Weather({ error, loading, data }: WeatherProps) {

    if (loading) return <Loader />
    if (error) return <h1>{error}</h1>
    if (!data) return null;

    return (
        <div className='card_outer pt-2 p-4'>
            <h1 className='text-xl pb-4 text-gray-300'>Weather</h1>

            <div className='card'>
                <div className='flex justify-between'>
                    <div className='leftside'>
                        <p className='text-3xl'> {data.name}, <b className='text-gray-400 font-light'>{data.sys.country}</b> </p>
                        <div className='pt-3'>
                            {/* <p className='text-2xl text-gray-400'>{data.main.temp}°C / {(data.main.temp * 1.8 + 32).toFixed(1)}°F</p> */}
                            <p className='text-4xl text-gray-400'>{data.main.temp}°C/°F</p>
                            <p className='text-xl pt-1'>{data.weather[0].description}</p>
                        </div>
                    </div>
                    <div className='rightside'>
                        <img
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            alt={data.weather[0].description}
                            className="w-[100px] h-[100px]"
                        />
                        {/* {weatherIcons[data.weather[0].main] ?? <WiDayCloudy className='text-[100px]' />} */}
                    </div>
                </div>
                <div className='flex justify-between pt-4 text-gray-300'>
                    <span className='flex items-center gap-2'>
                        <WiHumidity />
                        {data.main.humidity}%
                    </span>
                    <span className='flex items-center gap-2'>
                        <GiWindsock />
                        {data.wind.speed} km/h
                    </span>
                    <span className='flex items-center gap-2'>
                        <IoTimerOutline />
                        {formatTime(data.sys.sunset)}
                    </span>
                </div>
            </div>
        </div>
    )
}
