import React from 'react'
import Navbar from '@/components/navbar/Navbar'


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  )
}
