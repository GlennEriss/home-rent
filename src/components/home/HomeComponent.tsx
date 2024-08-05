import React from 'react'
import InfoComponent from './InfoComponent'
import SearchProperty from './SearchProperty'
import PropertyTypes from './PropertyTypes'
import PropertyList from './PropertyList'
import PropertyByProvince from './PropertyByProvince'

export default function HomeComponent() {
  return (
    <div className='flex flex-col gap-3'>
      <InfoComponent />
      <SearchProperty />
      <PropertyTypes />
      <PropertyList />
      <PropertyByProvince />
    </div>
  )
}
