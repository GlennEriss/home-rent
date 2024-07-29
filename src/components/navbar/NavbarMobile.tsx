'use client'
import React, { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import LogoText from '../logo/LogoText'
import { Button } from '../ui/button'
import { MenuNavbar } from './data'
import { Link } from '@/navigation'

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false)
    const maxHeight = menuOpen ? '1000px' : '0px'
    return (
        <div className="xl:hidden">
            <div className='flex justify-between p-3'>
                <Link href=''>
                    <LogoText />
                </Link>
                <Button onClick={() => setMenuOpen(!menuOpen)}>
                    <GrMenu />
                </Button>
            </div>
            <div className='z-20 fixed bg-black w-full rounded-b-lg overflow-hidden transition-all duration-700 ease-in-out' style={{ maxHeight }}>
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
