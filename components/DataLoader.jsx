'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

export default function DataLoader() {
    const { data, isLoading} = useQuery({
        queryFn: async () => {
            const data = await fetch('/config')
            const jsonData = data.json()
            return jsonData
        },
        queryKey: ['configData']
    })

    React.useEffect(() => {
        console.log("react-query data: ", data)
    }, [data])

  return (
    <div></div>
  )
}
