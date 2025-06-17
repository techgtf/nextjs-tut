'use client'

import { createContext, useState, ReactNode, useContext } from 'react'

type WeatherContextType = {
    city: string
    setCity: (newCity: string) => void,
    lat: string
    setLat: (newCity: string) => void,
    long: string
    setLong: (newCity: string) => void,
}

const CityContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
    const [city, setCity] = useState('london');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    return (
        <CityContext.Provider
            value={{
                city,
                setCity,
                lat,
                setLat,
                long,
                setLong
            }}
        >{children}</CityContext.Provider>
    )
}

export const useWeather = () => {
    const context = useContext(CityContext);
    if (!context) {
        throw new Error('useCity must be used within a WeatherProvider')
    }
    return context
}