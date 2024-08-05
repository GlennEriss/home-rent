import DetailsHouse from '@/components/house/DetailsHouse';
import DetailsStudio from '@/components/house/DetailsStudio';
import { Studio } from '@/types';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/studios/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        return notFound()
    }
    const studio: Studio = await response.json()
    console.log(studio)
    return (
        <div className="container mx-auto p-4">
            <DetailsStudio studio={studio} />
        </div>
    )
}
