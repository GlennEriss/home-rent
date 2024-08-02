import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Button } from '../ui/button'
import OwnerForm from './OwnerForm'
import { Owner } from '@/types'

type UpdateOwnerProps = {
    owner: Partial<Owner>
}
export default function UpdateOwner({owner}: UpdateOwnerProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='default' className='bg-white hover:bg-white text-center'>
                    <FaEdit size={25} color='black' />
                </Button>
            </DialogTrigger>
            <DialogContent className='overflow-auto'>
                <DialogHeader>
                    <DialogTitle>
                        Ajouter un propriétaire
                    </DialogTitle>
                </DialogHeader>
                <OwnerForm owner={owner} />
            </DialogContent>
        </Dialog>
    )
}
