import { useLandContext } from '@/providers/LandProvider'
import React from 'react'
import CardLandItem from './CardLandItem'

export default function LandList() {
  const {lands} = useLandContext()
  if(!lands){
    return <div>Loading...</div>
  }
  console.log(lands)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {
            lands.map((land, index) => (
                <CardLandItem land={land} key={index}/>
            ))
        }
    </div>
  )
}
