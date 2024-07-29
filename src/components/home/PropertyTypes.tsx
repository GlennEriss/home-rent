'use client'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel'
import { cn } from '@/lib/utils'
import { PropertyTypesList } from './data'
import Autoplay from "embla-carousel-autoplay"


export default function PropertyTypes() {
  const t = useTranslations('PropertyTypes')
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
    <div className='p-5'>
      <h1 className='text-center text-2xl text-[#2E3D7E] font-bold'>{t('title')}</h1>
      <Carousel setApi={setApi} plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
        <CarouselContent >
          {
            PropertyTypesList.map((item, index) =>
              <CarouselItem key={index} className='md:basis-1/3 xl:basis-1/4'>
                <div className="rounded-xl flex flex-col gap-2 justify-center items-center mt-5 p-10 bg-[#F6F8FF]">
                  <span className='rounded-full bg-[#2F3D7E] p-5'>
                    <AiOutlineHome size={50} color='white' />
                  </span>
                  <span className='font-bold text-xl'>{t(item.title)}</span>
                  <span className='text-gray-500'>{t('property', { number: 22 })}</span>
                </div>
              </CarouselItem>
            )
          }

        </CarouselContent>
        <div className="flex items-center justify-center mt-4 gap-2 xl:hidden">
          {Array.from({ length: count }, (_, i) => (
            <button key={i} className={cn('w-3 h-3 rounded-full', { 'bg-blue-500': i === currentSlide, 'bg-gray-300': i !== currentSlide })} onClick={() => api?.scrollTo(i)} />
          ))}
        </div>
      </Carousel>
    </div>
  )
}