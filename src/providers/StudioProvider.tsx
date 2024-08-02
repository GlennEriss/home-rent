'use client'
import { Studio } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export type StudioProps = {
    searchStudio: string | undefined,
    setSearchStudio: Dispatch<SetStateAction<string | undefined>>,
    studios: Partial<Studio>[] | undefined
}
export const StudioContext = createContext<StudioProps>({
    searchStudio: '',
    setSearchStudio: () => { },
    studios: []
})
export const useStudioContext = () => {
    return useContext(StudioContext)
}
export default function StudioProvider({ children }: { children: React.ReactNode }) {
    const [searchStudio, setSearchStudio] = useState<string | undefined>('')
    const { data, isPending } = useQuery({
        queryKey: ['studios'],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/studios`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const studiosData: Partial<Studio>[] = await response.json();
            return studiosData;
        }
    })
    return (
        <StudioContext.Provider value={{
            studios: data,
            searchStudio,
            setSearchStudio,
        }}>
            {children}
        </StudioContext.Provider>
    )
}
