import React from 'react'
import { useHouseContext } from '@/providers/HouseProvider'
import CardHomeItem from './CardHomeItem'

export default function HouseList() {
  const {houses} = useHouseContext()
  if(!houses){
    return <div>Loading...</div>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {
            houses.map((house, index) => (
                <CardHomeItem house={house} key={index}/>
            ))
        }
    </div>
  )
}
