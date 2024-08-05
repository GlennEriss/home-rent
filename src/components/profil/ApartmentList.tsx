import { useApartmentContext } from '@/providers/ApartmentProviders'
import React from 'react'
import CardItemApartment from './CardItemApartment'

export default function ApartmentList() {
  const {apartments} = useApartmentContext()
  if(!apartments){
    return <div>Loading...</div>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {
            apartments.map((apartment, index) => (
                <CardItemApartment apartment={apartment} key={index}/>
            ))
        }
    </div>
  )
}
