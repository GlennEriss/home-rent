import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Sora } from 'next/font/google'
import { cn } from '@/lib/utils'

const sora = Sora({
  subsets: ['latin'],
  weight: ['500']
})

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={cn('overscroll-none',sora.className)}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}