import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card'
import { useTranslations } from 'next-intl'
import { IoIosBed } from 'react-icons/io'
import { FaBath, FaCouch } from 'react-icons/fa'
import { GiHomeGarage } from 'react-icons/gi'
import { AiFillLock } from 'react-icons/ai'
import { GrCafeteria, GrSwim } from 'react-icons/gr'
import { MdLocalCafe } from 'react-icons/md'
import { Separator } from '../ui/separator'
import Link from 'next/link'

export default function CardProperty() {
  const t = useTranslations('CardProperty')
  return (
    <Card className='rounded-xl w-[350px] h-full'>
      <CardHeader className='bg-[url(/assets/home.webp)] bg-cover p-5 rounded-t-xl overflow-hidden h-[350px]'>
        <div>
          <span className='p-3 bg-white rounded-lg'>
            {t('rent')}
          </span>
        </div>
      </CardHeader>
      <CardContent className='mt-5'>
        <h1 className='text-xl font-bold'> Title property </h1>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <CardDescription className='col-span-2'>
            {t('localisation', {city: 'Libreville', province: 'ESTUAIRE', country:'GABON'})}
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <IoIosBed size={25} /> </span>
            <span> {t('bedroom', { size: 6 })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <FaBath size={25} /> </span>
            <span> {t('bathroom', { size: 6 })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <GrCafeteria size={25} /> </span>
            <span> {t('kitchen', { size: 6 })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <FaCouch size={25} /> </span>
            <span> {t('living', { size: 6 })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <GiHomeGarage size={25} /> </span>
            <span> {t('garage', { size: 6 })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <MdLocalCafe size={25} /> </span>
            <span> {t('terrace', { size: 6 })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <AiFillLock size={25} /> </span>
            <span> {t('barrier')} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <GrSwim size={25} /> </span>
            <span> {t('swim')} </span>
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <Separator />
        <div className="grid grid-cols-2">
          <div>
            <p>
              {t('price', { value: 50000 })}
            </p>
          </div>
          <div>
            <Link href='' className='p-3 bg-orange-400 rounded-lg text-white'>
              {t('details')}
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

