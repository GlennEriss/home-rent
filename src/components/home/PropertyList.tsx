'use client'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useStudioContext } from '@/providers/StudioProvider'
import { useApartmentContext } from '@/providers/ApartmentProviders'
import { useHouseContext } from '@/providers/HouseProvider'
import { useLandContext } from '@/providers/LandProvider'
import CardHomeItem from '../profil/CardHomeItem'
import CardItemApartment from '../profil/CardItemApartment'
import CardStudioItem from '../profil/CardStudioItem'
import CardLandItem from '../profil/CardLandItem'
import Autoplay from "embla-carousel-autoplay"

export default function PropertyList() {
  const t = useTranslations('PropertyList')
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const { houses } = useHouseContext()
  const { apartments } = useApartmentContext()
  const { lands } = useLandContext()
  const { studios } = useStudioContext()
  
  useEffect(() => {
    if (!api) {
      return
    }
    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  const count = api?.scrollSnapList().length || 0

  return (
    <div className='bg-[#F6F8FF] py-10'>
      <h1 className='text-center text-2xl text-[#2E3D7E] font-bold'>{t('title')}</h1>
      <Carousel setApi={setApi} plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}>
        <CarouselContent className='p-2 xl:p-5'>
          <CarouselItem>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5'>
              {houses && houses.length > 0 && 
                houses.filter(house => house.status === 'ACTIVE').slice(0, 4).map((house, index) => (
                  <CardHomeItem key={index} house={house} />
                ))
              }
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 mt-5'>
              {apartments && apartments.length > 0 && 
                apartments.filter(apartment => apartment.status === 'ACTIVE').slice(0, 4).map((apartment, index) => (
                  <CardItemApartment key={index} apartment={apartment} />
                ))
              }
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 mt-5'>
              {studios && studios.length > 0 && 
                studios.filter(studio => studio.status === 'ACTIVE').slice(0, 4).map((studio, index) => (
                  <CardStudioItem key={index} studio={studio} />
                ))
              }
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 mt-5'>
              {lands && lands.length > 0 && 
                lands.filter(land => land.status === 'ACTIVE').slice(0, 4).map((land, index) => (
                  <CardLandItem key={index} land={land} />
                ))
              }
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex items-center justify-center mt-4 gap-2">
          {Array.from({ length: count }, (_, i) => (
            <button key={i} className={cn('w-3 h-3 rounded-full', { 'bg-blue-500': i === currentSlide, 'bg-gray-300': i !== currentSlide })} onClick={() => api?.scrollTo(i)} />
          ))}
        </div>
      </Carousel>
      <div className='flex justify-end items-center p-4'>
        <Link href='' className='bg-orange-400 p-3 text-white rounded-xl '> {t('showMore')} </Link>
      </div>
    </div>
  )
}