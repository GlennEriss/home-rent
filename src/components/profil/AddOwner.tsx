import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { type } from 'os'
import { title } from 'process'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import OwnerForm from './OwnerForm'

export default function AddOwner() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='text-md bg-[#2F3D7F] text-center text-white p-3 rounded-md'>
                    <span className='hidden md:block'>
                        Ajouter
                    </span>
                    <FaPlus size={20}/>
                </Button>
            </DialogTrigger>
            <DialogContent className='overflow-auto'>
                <DialogHeader>
                    <DialogTitle>
                        Ajouter un propriétaire
                    </DialogTitle>
                </DialogHeader>
                <OwnerForm/>
            </DialogContent>
        </Dialog>
    )
}
