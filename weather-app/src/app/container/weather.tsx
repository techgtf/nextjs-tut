'use client'

import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import WeatherCard from '../components/dashboard/weather'

import { BASEURL, APIKEY } from "../../../config"
import { useWeather } from '../context/WeatherContext'

export default function Weather() {
    const { city, setLat, setLong } = useWeather();
    const endPoint = `${BASEURL}weather?q=${city}&appid=${APIKEY}&units=metric`
    const { error, loading, data, giveData } = useFetch({ endPoint });

    useEffect(() => {
        giveData();
    }, [city])

    useEffect(() => {
        if (data?.coord) {
            setLat(data.coord.lat.toString())
            setLong(data.coord.lon.toString())
        }
    }, [data])





    return (
        <WeatherCard
            error={error}
            loading={loading}
            data={data}
        />
    )
}
