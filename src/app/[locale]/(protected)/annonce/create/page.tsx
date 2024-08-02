import { Link } from '@/navigation';
import React from 'react';

export default function Page() {
    const types = [
        {
            title: 'Appartement',
            link: '/annonce/create/apartment'
        },
        {
            title: 'Maison',
            link: '/annonce/create/house'
        },
        {
            title: 'Terrain',
            link: '/annonce/create/land'
        },
        {
            title: 'Studio',
            link: '/annonce/create/studio'
        }
    ];

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-6 max-w-4xl'>
                {types.map((type, index) => (
                    <Link
                        key={index}
                        href={type.link}
                        className='p-5 bg-[#2f3d7f] md:w-[300px] md:h-[100px] flex items-center justify-center text-center rounded-xl text-white font-semibold hover:bg-[#1f2a5f] transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl'
                    >
                        {type.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}