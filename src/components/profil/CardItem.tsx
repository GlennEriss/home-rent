'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'
import { AiFillLock, AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'
import { FaBath, FaCouch } from 'react-icons/fa'
import { GiHomeGarage } from 'react-icons/gi'
import { GrCafeteria, GrSwim } from 'react-icons/gr'
import { IoIosBed } from 'react-icons/io'
import { MdLocalCafe } from 'react-icons/md'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Button } from '../ui/button'

export default function CardItem() {
    const t = useTranslations('CardProperty')
    return (
        <Card className='overflow-hidden'>
            <CardHeader className='p-0'>
                <Image
                    alt=''
                    width={400}
                    height={400}
                    objectFit='fill'
                    src='/assets/home.webp' />
            </CardHeader>
            <CardContent className='mt-5'>
                <h1 className='text-xl font-bold'> Title property </h1>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <CardDescription className='col-span-2'>
                        {t('localisation', { city: 'Libreville', province: 'ESTUAIRE', country: 'GABON' })}
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
                <div className="flex items-center w-full">
                    <p>
                        {t('price', { value: 50000 })}
                    </p>
                    <Link href='' className='ml-auto mr-1 py-2 px-4 bg-orange-400 rounded-lg text-white'>
                        <AiOutlineEye size={25}/>
                    </Link>
                    <Button className='bg-red-500'>
                        <AiOutlineDelete size={25}/>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
