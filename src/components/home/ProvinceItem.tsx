import React from 'react'
import { Card, CardHeader } from '../ui/card'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type ProvinceItemProps = {
  province: { title: string, link: string, imgUrl: string }
}
export default function ProvinceItem({ province }: ProvinceItemProps) {
  const t = useTranslations('ProvinceItem')
  return (
    <Link href=''>
      <Card className='rounded-xl'>
        <CardHeader style={{
          backgroundImage: `url(/assets/${province.imgUrl})`,
          backgroundSize: 'cover',
          padding: '20px',
          borderRadius: '10px',
          overflow: 'hidden',
          height: '350px'
        }}>
          <div className='p-3'>
            <h1 className='text-xl text-white'> {t('province', { title: province.title })} </h1>
            <span className='text-white'>
              {t('property', { number: 22 })}
            </span>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}