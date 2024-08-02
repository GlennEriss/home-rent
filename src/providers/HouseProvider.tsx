'use client'
import { House } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export type HouseProps = {
    searchHouse: string | undefined,
    setSearchHouse: Dispatch<SetStateAction<string | undefined>>,
    houses: Partial<House>[] | undefined
}
export const HouseContext = createContext<HouseProps>({
    searchHouse: '',
    setSearchHouse: () => { },
    houses: []
})

export const useHouseContext = () => {
    return useContext(HouseContext)
}
export default function HouseProvider({ children }: { children: React.ReactNode }) {
    const [searchHouse, setSearchHouse] = useState<string | undefined>('')
    const { data, isPending } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/houses`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const housesData: Partial<House>[] = await response.json();
            return housesData;
        }
    })
    return (
        <HouseContext.Provider value={{
            houses: data,
            searchHouse,
            setSearchHouse,
        }}>
            {children}
        </HouseContext.Provider>
    )
}
