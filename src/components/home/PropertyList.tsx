'use client'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import CardProperty from './CardProperty'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function PropertyList() {
  const t = useTranslations('PropertyList')
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

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
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <div className='flex justify-center items-center mt-5'>
              <CardProperty />
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
