import { useStudioContext } from '@/providers/StudioProvider'
import React from 'react'
import CardStudioItem from './CardStudioItem'

export default function StudioList() {
  const {studios} = useStudioContext()
  if(!studios){
    return <div>Loading...</div>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {
            studios.map((studio, index) => (
                <CardStudioItem studio={studio} key={index}/>
            ))
        }
    </div>
  )
}
