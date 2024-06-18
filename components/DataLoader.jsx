'use client'
import React from 'react'
import useFetchConfig from '@/app/hooks/queries/useFetchConfig'

export default function DataLoader() {
    // const { data, isLoading} = useQuery({
    //     queryFn: async () => {
    //         const data = await fetch('/config')
    //         const jsonData = data.json()
    //         return jsonData
    //     },
    //     queryKey: ['configData']
    // })

    const { data, isLoading, isError } = useFetchConfig()

    React.useEffect(() => {
        console.log("react-query data: ", data)
    }, [data])

  return (
    <div></div>
  )
}
