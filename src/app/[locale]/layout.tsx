import React from 'react'
import { NextIntlClientProvider } from 'next-intl'

export default function LocaleLayout({
  children,
  params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}