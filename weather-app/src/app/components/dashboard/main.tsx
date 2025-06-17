import React from 'react'
import Weather from '../../container/weather';
import HourlyForecast from '@/app/container/hourlyForecast';
import AirPollution from '@/app/container/airPollution';

export default function Main() {
    return (
        <div className='dashboardmain text-white capitalize'>
            <Weather />
            <HourlyForecast />
            <AirPollution />
        </div>
    )
}
