import React from 'react'
import {Sora} from 'next/font/google'
import { cn } from '@/lib/utils'
const sora = Sora({
  subsets: ['latin'],
  weight: ['500']
})
type LogoInitialTextProps =  {
  className?: string
}
export default function LogoInitialText({className}: LogoInitialTextProps) {
  return (
    <div className={cn(className, sora.className)}>
        H-F
    </div>
  )
}
