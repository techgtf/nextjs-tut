import React from 'react'
import Loader from '../common/loader'
type ForcastType = {
    time: string,
    temp: string,
    sky: string,
}
type ForcastProp = {
    data: ForcastType[] | null,
    error: string
    loading: boolean
}

const weatherLabelMap: { [key: string]: string } = {
    "clear sky": "C Sky",
    "few clouds": "f clouds",
    "scattered clouds": "s clouds",
    "broken clouds": "b Cloudy",
    "overcast clouds": "o Cloudy",
    "light rain": "l Rain",
    "moderate rain": "m Rain",
    "heavy intensity rain": "H Rain",
    "light snow": "Snowy",
    "snow": "Snow",
    "mist": "Mist",
    "haze": "Hazy",
    "fog": "Foggy",
    "thunderstorm": "Stormy",
}

export default function ForeCast({ loading, error, data }: ForcastProp) {

    function fomatted(timestamp: number) {
        const time = new Date(timestamp).toLocaleTimeString([], {
            hour: 'numeric',
            hour12: true
        })
        return time;
    }

    function fomattedLabel(label: string) {
        const rowDescription = label.toLowerCase();
        const displayLabel = weatherLabelMap[rowDescription] || rowDescription;
        return displayLabel;
    }

    if (loading) return <Loader />
    if (error) return <h1>{error}</h1>
    if (!data) return null;

    return (
        <div className='card_outer pt-2 p-4'>
            <h1 className='text-xl pb-4 text-gray-300'>Hourly Forecast</h1>

            <div className='flex bg-[#39454f] p-5 rounded-2xl overflow-x-scroll gap-3 text-center '>
                {data && data['list']?.map((item: any, index: number) => (
                    <div
                        className='bg-[#3d4a54] grid px-3 py-4 rounded-[20px] min-w-[33%] relative group'
                        key={index}>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[-10px] opacity-0 group-hover:opacity-100 transition-opacity bg-[#2a3940] text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                            {item['weather'][0].description}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2a3940] rotate-45"></div>
                        </div>
                        <span className='block time text-[17px] text-gray-300'>{fomatted(item.dt_txt)}</span>
                        <div className='relative min-h-[72px] flex justify-center items-center'>
                            <img
                                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                alt="cloud"
                                className='absolute'
                            />
                        </div>
                        <span className='block degree text-gray-200 text-[17px]'>{parseInt(item['main'].temp)}°</span>
                        <div className=' pt-1 block degree text-gray-300 text-[14px] relative'>
                            {fomattedLabel(item['weather'][0].description)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}