'use client'
import React, { useEffect, useState } from 'react'
import DetailsOwner from './DetailsOwner'
import UpdateOwner from './UpdateOwner'
import { useOwnerContext } from '@/providers/OwnerProvider'
import { Owner } from '@/types'

const headers = [
    "Noms",
    "Prénoms",
    "Téléphone",
    "Actions",
]

export default function OwnerListBody() {
    const { owners, searchOwner } = useOwnerContext();
    const [filteredOwners, setFilteredOwners] = useState<Partial<Owner>[]>([]);

    useEffect(() => {
        if (owners)
            if (searchOwner) {
                setFilteredOwners(owners.filter(owner => owner.searchableName!.toLowerCase().includes(searchOwner.toLowerCase())));
            } else {
                setFilteredOwners(owners);
            }
    }, [owners, searchOwner]);

    if (!owners) {
        return <div>Chargement...</div>
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        {
                            headers.map((header, index) => (
                                <th key={index} className="py-2 px-4 text-left">
                                    {header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredOwners.map((owner, index) =>
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4">{owner.firstName}</td>
                                <td className="py-2 px-4">{owner.lastName}</td>
                                <td className="py-2 px-4">{owner.phoneNumber}</td>
                                <td className="py-2 px-4 flex items-center">
                                    <DetailsOwner />
                                    <UpdateOwner owner={owner} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}