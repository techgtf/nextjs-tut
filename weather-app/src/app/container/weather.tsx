'use client'

import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Weather from '../components/dashboard/weather'

// import { BASEURL } from "../../../config"

export default function Weather() {
    const city = 'jaipur'
    const apiKey = 'a8124ed45ccbfb24d17fcc11ca5f0fcb';
    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    // const apiKey = BASEURL;
    const { error, loading, data, giveData } = useFetch({ endPoint });

    useEffect(() => {
        giveData()
    }, [])

    return (
        <Weather
            error={error}
            loading={loading}
            data={data}
        />
    )
}
