'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import HeroSection from '../hero-section/HeroSection'

export default function InfoComponent() {
  const t = useTranslations('InfoComponent')
  return (
    <HeroSection>
      <div className="rounded-b-xl p-5 py-10 relative 
    xl:rounded-xl md:h-[400px] xl:h-[500px]">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-xl "></div>
        <div className="z-30 relative">
          <div className="flex space-x-1 justify-center items-center">
            <span className='text-white xl:text-4xl'>
              {t('welcome')}
            </span>
          </div>
          <p className='mt-3 text-xl xl:text-4xl text-center text-white'>
            {t('invest')}
          </p>
          <p className='mt-5 xl:text-xl text-center text-white'>
            {t('description')}
          </p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <Link href='' className='z-100 bg-orange-400 px-4 py-2 rounded-lg text-white'> {t('catalog')} </Link>
            <Link href='/annonce/create' className='z-50 px-1 text-nowrap md:px-4 py-2 rounded-lg text-white border-2 border-white'> {t('create')} </Link>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}
