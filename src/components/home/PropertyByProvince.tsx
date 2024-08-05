import React from 'react'
import ProvinceItem from './ProvinceItem'
import { useTranslations } from 'next-intl'
import { regionsDakar } from './data'

export default function PropertyByProvince() {
  const t = useTranslations('PropertyByProvince')
  return (
    <div className='grid gap-4 bg-[#F6F8FF] mt-10 py-10'>
      <h1 className='text-center text-2xl text-[#2E3D7E] font-bold'>Propriétés par région</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1 px-3'>
        {
          regionsDakar.map((province, index) =>
            <ProvinceItem province={province} key={index} />
          )
        }
      </div>
    </div>
  )
}
