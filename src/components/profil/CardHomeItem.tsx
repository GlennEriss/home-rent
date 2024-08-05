import { useTranslations } from 'next-intl'
import React from 'react'
import { AiFillHome, AiOutlineEye } from 'react-icons/ai'
import { FaBath, FaToilet } from 'react-icons/fa'
import { GrCafeteria } from 'react-icons/gr'
import { IoIosBed } from 'react-icons/io'
import { Card, CardHeader, CardContent, CardDescription, CardFooter } from '../ui/card'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { Link } from '@/navigation'

export default function CardHomeItem({ house }: { house: any }) {
  const t = useTranslations('CardProperty')
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='p-0'>
        <Image
          alt=''
          width={400}
          height={400}
          objectFit='fill'
          src={`${process.env.NEXT_PUBLIC_API_URL}${house.mainImageUrl}`} />
      </CardHeader>
      <CardContent className='mt-5'>
        <h1 className='text-xl font-bold'> {house.description} </h1>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <CardDescription className='col-span-2'>
            {house.region} {house.location}
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <IoIosBed size={25} /> </span>
            <span className='md:text-nowrap'> {t('bedroom', { size: house.numberOfRooms })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <FaBath size={25} /> </span>
            <span className='md:text-nowrap'> {t('bathroom', { size: house.numberOfBathrooms })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <GrCafeteria size={25} /> </span>
            <span className='md:text-nowrap'> {t('kitchen', { size: house.numberOfKitchens })} </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <FaToilet size={25} /> </span>
            <span className='md:text-nowrap'>  {house.numberOfToilets} Toilettes </span>
          </CardDescription>
          <CardDescription className='flex items-center space-x-2'>
            <span> <AiFillHome size={25} /> </span>
            <span className='md:text-nowrap'>  {house.area} m2 </span>
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <Separator />
        <div className="flex items-center w-full">
          <p>
            {t('price', { value: house.rate })}
          </p>
          <Link href={`/house/${house.id}`} className='ml-auto py-2 px-4 bg-orange-400 rounded-lg text-white'>
            <AiOutlineEye size={25} />
          </Link>
          {/* <Button className='bg-red-500'>
                        <AiOutlineDelete size={25} />
                    </Button> */}
        </div>
      </CardFooter>
    </Card>
  )
}
