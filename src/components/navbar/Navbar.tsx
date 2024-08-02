'use client'
import React from 'react'
import LogoText from '../logo/LogoText'
import { Link } from '@/navigation'
import NavbarMobile from './NavbarMobile'
import { FaPlus } from 'react-icons/fa'

export default function Navbar() {

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <NavbarMobile />
      <div className='hidden xl:flex p-5 items-center'>
        <Link href=''>
          <LogoText />
        </Link>
        <div className='flex ml-auto gap-1' >
          <Link href='/annonce/create' className='flex py-3 text-center px-4 gap-2 items-center bg-[#ED7D3B] rounded-xl text-white'>
            <span className='hidden md:block'>
              Créer une annonce
            </span>
            <FaPlus size={20} />
          </Link>
          <Link href='' className='py-3 text-center w-[130px] bg-[#2F3D7F] rounded-xl text-white'>
            Se connecter
          </Link>
          <Link href='' className='py-3 text-center w-[130px] rounded-xl border border-[#2F3D7F] text-[#2F3D7F]' >
            S'inscrire
          </Link>
        </div>

      </div>
    </div>
  )
}
