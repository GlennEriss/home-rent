import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Sora } from 'next/font/google'
import { cn } from '@/lib/utils'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { Toaster } from '@/components/ui/toaster'
import OwnerProvider from '@/providers/OwnerProvider'
import ApartmentProvider from '@/providers/ApartmentProviders'
import HouseProvider from '@/providers/HouseProvider'
import StudioProvider from '@/providers/StudioProvider'
import LandProvider from '@/providers/LandProvider'

const sora = Sora({
  subsets: ['latin'],
  weight: ['500']
})

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={cn('overscroll-none', sora.className)}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ReactQueryProvider>
            <OwnerProvider>
              <ApartmentProvider>
                <HouseProvider>
                  <StudioProvider>
                    <LandProvider>
                      {children}
                    </LandProvider>
                  </StudioProvider>
                </HouseProvider>
              </ApartmentProvider>
            </OwnerProvider>
            <Toaster />
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}