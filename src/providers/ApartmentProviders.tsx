'use client'
import { Apartment } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export type ApartmentProps = {
    searchApartment: string | undefined,
    setSearchApartment: Dispatch<SetStateAction<string | undefined>>,
    apartments: Partial<Apartment>[] | undefined
}
export const ApartmentContext = createContext<ApartmentProps>({
    searchApartment: '',
    setSearchApartment: () => { },
    apartments: []
})

export const useApartmentContext = () => {
    return useContext(ApartmentContext)
}
export default function ApartmentProvider({ children }: { children: React.ReactNode }) {
    const [searchApartment, setSearchApartment] = useState<string | undefined>('')
    const { data, isPending } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apartments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const apartmentsData: Partial<Apartment>[] = await response.json();
            return apartmentsData;
        }
    })
    return (
        <ApartmentContext.Provider value={{
            apartments: data,
            searchApartment,
            setSearchApartment,
        }}>
            {children}
        </ApartmentContext.Provider>
    )
}
