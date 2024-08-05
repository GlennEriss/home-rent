import React from 'react'
import {Sora} from 'next/font/google'
import { cn } from '@/lib/utils'
const sora = Sora({
  subsets: ['latin'],
  weight: ['500']
})
export default function LogoText() {
  return (
    <div className={cn('text-xl text-[#2f3d7f]', sora.className)}>
        HOME-FINDER
    </div>
  )
}
