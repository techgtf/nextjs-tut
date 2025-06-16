import { useState } from 'react'

type UseFetchProps = {
    endPoint?: string
}

type FetchResult<T> = {
    loading: boolean
    data: T | null
    error: string
    giveData: () => Promise<void>
}

export default function useFetch<T = any>({
    endPoint = "https://api.openweathermap.org/data/2.5/weather"
}: UseFetchProps): FetchResult<T> {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState('')

    const giveData = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await fetch(endPoint)
            if (!response.ok) {
                throw new Error('Error from API')
            }
            const json: T = await response.json()
            setData(json)
        } catch (err: any) {
            setError(err.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    return { loading, data, error, giveData }
}
