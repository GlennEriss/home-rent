import React from 'react'
import { FaHome, FaPlus } from 'react-icons/fa'
import { Button } from '../ui/button'

export default function CreateAnnonceButton() {
    return (
        <Button className='flex md:gap-2 rounded-md ml-auto mr-2 bg-[#FB923C]'>
            <FaHome size={20} className='md:hidden' />
            <span className='hidden md:block'>
                créer une annonce
            </span>
            <FaPlus size={20} />
        </Button>
    )
}
