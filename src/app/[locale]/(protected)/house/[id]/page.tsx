import DetailsHouse from '@/components/house/DetailsHouse';
import { Apartment, House } from '@/types';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/houses/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        return notFound()
    }
    const house: House = await response.json()
    console.log(house)
    return (
        <div className="container mx-auto p-4">
            <DetailsHouse house={house} />
        </div>
    )
}
