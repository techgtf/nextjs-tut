'use client'

import useFetch from '@/app/hooks/useFetch'
import React, { useEffect } from 'react'
import { useWeather } from '../context/WeatherContext';
import { APIKEY, BASEURL } from '../../../config';
import AirPollutionCard from '../components/dashboard/airPollution';


export default function AirPollution() {
    const { city, lat, long } = useWeather();
    const endPoint = `${BASEURL}air_pollution?lat=${lat}&lon=${long}&appid=${APIKEY}`
    const { error, loading, data, giveData } = useFetch({ endPoint })

    useEffect(() => {
        if (lat && long) {
            giveData()
        }
    }, [city, lat, long])

    return (
        <AirPollutionCard
            loading={loading}
            error={error}
            data={data}
        />
    )
}
