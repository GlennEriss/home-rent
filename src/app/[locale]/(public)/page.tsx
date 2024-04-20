import React from 'react'
import {getTranslations} from 'next-intl/server'
 
export async function generateMetadata({params: {locale}}:{params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Home'})
  return {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
  }
}

export default function page() {
  return (
    <div>
      aaa
    </div>
  )
}
