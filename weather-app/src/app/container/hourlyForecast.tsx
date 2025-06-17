'use client'
import React, { useEffect } from 'react'
import { useWeather } from '../context/WeatherContext'
import { APIKEY, BASEURL } from '../../../config';
import useFetch from '../hooks/useFetch';
import ForeCast from '../components/dashboard/foreCast';

export default function HourlyForecast() {
    const { city } = useWeather();
    const endPoint = `${BASEURL}forecast?q=${city}&appid=${APIKEY}&units=metric`
    const { error, loading, data, giveData } = useFetch({ endPoint });

    useEffect(() => {
        giveData()
        console.log(data);
    }, [city])

    return (
        <ForeCast
            error={error}
            loading={loading}
            data={data}
        />
    )
}
