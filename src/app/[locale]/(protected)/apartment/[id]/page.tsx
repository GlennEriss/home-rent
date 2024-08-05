import DetailsApartment from '@/components/apartment/DetailsApartment';
import { Apartment } from '@/types';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apartments/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        return notFound()
    }
    const apartment: Apartment = await response.json()
    return (
        <div className="container mx-auto p-4">
            <DetailsApartment apartment={apartment} />
        </div>
    )
}
