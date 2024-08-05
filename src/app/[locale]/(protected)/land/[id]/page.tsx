import DetailsHouse from '@/components/house/DetailsHouse';
import DetailsStudio from '@/components/house/DetailsStudio';
import DetailsLand from '@/components/land/DetailsLand';
import { Land, Studio } from '@/types';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lands/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        return notFound()
    }
    const land: Land = await response.json()
    console.log(land)
    return (
        <div className="container mx-auto p-4">
            <DetailsLand land={land} />
        </div>
    )
}
