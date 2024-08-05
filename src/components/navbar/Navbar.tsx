'use client'
import React, { useState, useEffect } from 'react'
import LogoText from '../logo/LogoText'
import { Link } from '@/navigation'
import NavbarMobile from './NavbarMobile'
import { useCookies } from 'react-cookie'
import { FaPlus, FaUserCircle } from 'react-icons/fa'
import DeconnexionButton from './DeconnexionButton'

export default function Navbar() {
  const [cookies] = useCookies(['token']);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setHasToken(!!cookies.token);
  }, [cookies]);

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <NavbarMobile />
      <div className='hidden xl:flex p-5 items-center'>
        <Link href='/'>
          <LogoText />
        </Link>
        <div className='flex ml-auto items-center gap-4' >
          {hasToken && (
            <Link href='/annonce/create' className='flex py-3 text-center px-4 gap-2 items-center bg-[#ED7D3B] rounded-xl text-white'>
              <span className='hidden md:block'>
                Créer une annonce
              </span>
              <FaPlus size={20} />
            </Link>
          )}
          <Link href='' className='hover:text-gray-500' >
            Catalogues
          </Link>
          <Link href='' className='hover:text-gray-500' >
            Contact
          </Link>
          <Link href='' className='hover:text-gray-500' >
            A propos
          </Link>
          {hasToken && (
            <Link href='/profil' className='flex py-3 text-center px-4 gap-2 items-center bg-[#2F3D7F] rounded-xl text-white'>
              <span className='hidden md:block'>
                Profil
              </span>
              <FaUserCircle size={20} />
            </Link>
          )}
          {hasToken && (
            <DeconnexionButton />
          )}
        </div>
      </div>
    </div>
  )
}