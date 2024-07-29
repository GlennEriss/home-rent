'use client'
import React, { useState } from 'react'
import LogoText from '../logo/LogoText'
import { Button } from '../ui/button'
import { GrMenu } from 'react-icons/gr'
import { Link } from '@/navigation'
import { MenuNavbar } from './data'
import NavbarMobile from './NavbarMobile'

export default function Navbar() {

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <NavbarMobile />
      <div className='hidden xl:flex p-5 items-center'>
        <Link href=''>
          <LogoText />
        </Link>
        <div className='flex ml-auto gap-1' >
          <Link href='' className='py-3 text-center w-[130px] bg-[#ED7D3B] rounded-xl text-white'>
            Se connecter
          </Link>
          <Link href='' className='py-3 text-center w-[130px] rounded-xl border border-[#ED7D3B] text-[#ED7D3B]' >
            S'inscrire
          </Link>
        </div>

      </div>
    </div>
  )
}
