import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'
import { useTranslations } from 'next-intl'
import { AiFillHome, AiOutlineEye } from 'react-icons/ai'
import { FaBath, FaToilet } from 'react-icons/fa'
import { GrCafeteria } from 'react-icons/gr'
import { IoIosBed } from 'react-icons/io'
import { Link } from '@/navigation'

export default function CardStudioItem({ studio }: { studio: any }) {
    const t = useTranslations('CardProperty')
    return (
        <Card className='overflow-hidden'>
            <CardHeader className='p-0'>
                <Image
                    alt=''
                    width={400}
                    height={400}
                    objectFit='fill'
                    src={`${process.env.NEXT_PUBLIC_API_URL}${studio.mainImageUrl}`} />
            </CardHeader>
            <CardContent className='mt-5'>
                <h1 className='text-xl font-bold'> {studio.description} </h1>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <CardDescription className='col-span-2'>
                        {studio.region} {studio.location}
                    </CardDescription>
                    <CardDescription className='flex items-center space-x-2'>
                        <span> <IoIosBed size={25} /> </span>
                        <span className='md:text-nowrap'> {t('bedroom', { size: studio.numberOfRooms })} </span>
                    </CardDescription>
                    <CardDescription className='flex items-center space-x-2'>
                        <span> <FaBath size={25} /> </span>
                        <span className='md:text-nowrap'> {t('bathroom', { size: studio.numberOfBathrooms })} </span>
                    </CardDescription>
                    <CardDescription className='flex items-center space-x-2'>
                        <span> <GrCafeteria size={25} /> </span>
                        <span className='md:text-nowrap'> {t('kitchen', { size: studio.numberOfKitchens })} </span>
                    </CardDescription>
                    <CardDescription className='flex items-center space-x-2'>
                        <span> <FaToilet size={25} /> </span>
                        <span className='md:text-nowrap'>  {studio.numberOfToilets} Toilettes </span>
                    </CardDescription>
                    <CardDescription className='flex items-center space-x-2'>
                        <span> <AiFillHome size={25} /> </span>
                        <span className='md:text-nowrap'>  {studio.area} m2 </span>
                    </CardDescription>
                </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-4'>
                <Separator />
                <div className="flex items-center w-full">
                    <p>
                        {t('price', { value: studio.rate })}
                    </p>
                    <Link href='' className='ml-auto mr-1 py-2 px-4 bg-orange-400 rounded-lg text-white'>
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
