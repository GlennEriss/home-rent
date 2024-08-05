import LoginForm from '@/components/login/LoginForm'
import LogoText from '@/components/logo/LogoText'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function page() {
  const t = await getTranslations('Login')
  return (
    <div className='flex justify-center items-center p-5 bg-[url(/assets/real_estate_background.jpg)] min-h-screen bg-auto lg:bg-cover bg-no-repeat bg-app-color-blue bg-center'>
      <Card className='w-full md:w-4/5 rounded-xl md:py-8 lg:w-2/3 xl:w-1/3 shadow-lg'>
        <CardHeader className='p-0 px-4 flex justify-center items-center lg:px-9'>
          {/* <div>
            <LogoText />
          </div> */}
          <CardTitle className='text-center leading-8 md:leading-relaxed text-blue-800'>
            Connectez-vous
          </CardTitle>
        </CardHeader>
        <CardContent className='md:px-16 md:mt-2'>
          <LoginForm/>
        </CardContent>
      </Card>
    </div>
  )
}