import useFetch from '@/app/hooks/useFetch'
import React from 'react'
import Loader from '../common/loader'


type AirPollutionData = {
  list: {
    main: { aqi: number },
    components: {
      pm2_5: number,
      co: number,
    }[]
  }
}

type AirPollutionProp = {
  data: AirPollutionData | null,
  error: string
  loading: boolean
}
export default function AirPollution({ loading, error, data }: AirPollutionProp) {

  const aqi = data?.list?.[0]?.main?.aqi;
  const pm25 = data?.list?.[0]?.components?.pm2_5;
  const co = data?.list?.[0]?.components?.co;

  if (loading) return <Loader />
  if (error) return <h1>{error}</h1>
  if (!data) return null;

  return (
    <div className='card_outer pt-2 p-4 air_pollution'>
      <h2 className="text-xl pb-4 text-gray-300">Air Quality Index</h2>
      <div className="bg-[#39454f] text-white rounded-xl p-6 shadow-md w-full max-w-md mx-auto">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">AQI Level</span>
            <span className="text-lg font-bold text-green-400"> {aqi}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">PM2.5</span>
            <span className="text-lg font-bold text-yellow-400">{pm25}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">CO (Carbon Monoxide)</span>
            <span className="text-lg font-bold text-red-400">{co}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
