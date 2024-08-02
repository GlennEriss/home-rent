'use client'
import { Land } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export type LandProps = {
    searchLand: string | undefined,
    setSearchLand: Dispatch<SetStateAction<string | undefined>>,
    lands: Partial<Land>[] | undefined
}
export const LandContext = createContext<LandProps>({
    searchLand: '',
    setSearchLand: () => { },
    lands: []
})

export const useLandContext = () => {
    return useContext(LandContext)
}
export default function LandProvider({ children }: { children: React.ReactNode }) {
    const [searchLand, setSearchLand] = useState<string | undefined>('')
    const { data, isPending } = useQuery({
        queryKey: ['lands'],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lands`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const landsData: Partial<Land>[] = await response.json();
            return landsData;
        }
    })
    return (
        <LandContext.Provider value={{
            lands: data,
            searchLand,
            setSearchLand,
        }}>
            {children}
        </LandContext.Provider>
    )
}
