import React from 'react'
import {Sora} from 'next/font/google'
import { cn } from '@/lib/utils'
const sora = Sora({
  subsets: ['latin'],
  weight: ['500']
})
export default function LogoText() {
  return (
    <div className={cn('text-xl', sora.className)}>
        HOME-FINDER
    </div>
  )
}
