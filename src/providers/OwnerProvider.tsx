'use client'
import { Owner } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export type OwnerProps = {
    searchOwner: string | undefined,
    setSearchOwner: Dispatch<SetStateAction<string | undefined>>,
    owners: Partial<Owner>[]|undefined
}
export const OwnerContext = createContext<OwnerProps>({
    searchOwner: '',
    setSearchOwner: () => { },
    owners: []
})

export const useOwnerContext = () => {
    return useContext(OwnerContext)
}
export default function OwnerProvider({ children }: { children: React.ReactNode }) {
    const [searchOwner, setSearchOwner] = useState<string | undefined>('')
    const { data, isPending } = useQuery({
        queryKey: ['owners'],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/owners`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const ownersData: Partial<Owner>[] = await response.json();
            const owners = ownersData.map(owner => ({
                ...owner,
                searchableName: `${owner.firstName} ${owner.lastName}`,
            }));
            return owners;
        }
    })
    return (
        <OwnerContext.Provider value={{
            owners: data,
            searchOwner,
            setSearchOwner,
        }}>
            {children}
        </OwnerContext.Provider>
    )
}
