import React from 'react'

export default function Loader() {
    return (
        <div className="flex animate-pulse space-x-4">
            <div className="flex-1 space-y-6 py-1">
                <div className="h-44 rounded-xl bg-gray-200"></div>
            </div>
        </div>

    )
}
