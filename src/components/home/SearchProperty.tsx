'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

const filters = [
  {
    type: 'status',
    value: ['A louer', 'A vendre'],
    placeholder: 'sellOrRent'
  },
  {
    type: 'type',
    value: ['Studio', 'Maison', 'Appartment', 'Terrain'],
    placeholder: 'type'
  },
  {
    type: 'province',
    value: [
      "DAKAR",
      "DIOURBEL",
      "FATICK",
      "KAFFRINE",
      "KAOLACK",
      "KEDOUGOU",
      "KOLDA",
      "LOUGA",
      "MATAM",
      "SAINT-LOUIS",
      "SEDHIOU",
      "TAMBACOUNDA",
      "THIES",
      "ZIGUINCHOR"
    ],
    placeholder: 'province'
  },
  /* {
    type: 'city',
    value: ['studio', 'house', 'appartment', 'building', 'villa', 'local', 'desk', 'ground', 'bedroom'],
    placeholder: 'city'
  } */
]
export default function SearchProperty() {
  const t = useTranslations('SearchProperty')
  return (
    <div className="m-5 grid grid-cols-1 gap-4 rounded-xl p-5 py-10 lg:py-7 border bg-[#F6F8FF]">
      <h1 className='font-bold mx-auto text-[#2F3D7F] text-xl'> {t('title')} </h1>
      <div className='flex flex-col lg:flex-row gap-3'>
        <div className='grid md:grid-cols-2 gap-3 lg:grid-cols-3 flex-grow'>
          {
            filters.map((item, key) =>
              <Select key={key}>
                <SelectTrigger className='focus:ring-none focus:ring-0 p-5'>
                  <SelectValue placeholder={t(item.placeholder)} />
                </SelectTrigger>
                <SelectContent>
                  {
                    item.value.map((value, key) =>
                      <SelectItem key={key} value={value}>
                        {value}
                      </SelectItem>
                    )
                  }
                </SelectContent>
              </Select>
            )
          }
        </div>
        <Button className='bg-orange-400 lg:flex-1'>
          {t('search')}
        </Button>
      </div>

    </div>
  )
}
