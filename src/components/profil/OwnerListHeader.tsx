'use client'
import React from 'react'
import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'
import AddOwner from './AddOwner'
import { useOwnerContext } from '@/providers/OwnerProvider'

export default function OwnerListHeader() {
const {setSearchOwner} = useOwnerContext()
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center border rounded-lg px-2 py-1'>
                <Input 
                onChange={e => setSearchOwner(e.target.value)}
                type='search' 
                className='border-none focus-visible:ring-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Rechercher un propriétaire' />
                <FaSearch size={20} color='gray' />
            </div>
            <AddOwner/>
        </div>
    )
}
