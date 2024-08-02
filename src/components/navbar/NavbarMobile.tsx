'use client'
import React, { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import LogoText from '../logo/LogoText'
import { Button } from '../ui/button'
import { MenuNavbar } from './data'
import { Link } from '@/navigation'
import CreateAnnonceButton from './CreateAnnonceButton'

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false)
    const maxHeight = menuOpen ? '1000px' : '0px'
    return (
        <div className="xl:hidden">
            <div className='flex items-center p-3'>
                <Link href=''>
                    <LogoText />
                </Link>
                <CreateAnnonceButton/>
                <Button className='bg-[#2f3d7f] hover:bg-[#2f3d7f]' onClick={() => setMenuOpen(!menuOpen)}>
                    <GrMenu />
                </Button>
            </div>
            <div className='z-20 fixed bg-[#2f3d7f] w-full rounded-b-lg overflow-hidden transition-all duration-700 ease-in-out' style={{ maxHeight }}>
                {
                    MenuNavbar.map((item, index) =>
                        <div key={index} className='menu-content p-4 text-white'>
                            <Link href={item.link}>
                                {item.title}
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
