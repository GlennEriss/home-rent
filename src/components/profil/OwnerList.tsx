import React from 'react'
import OwnerListHeader from './OwnerListHeader'
import OwnerListBody from './OwnerListBody'

export default async function OwnerList() {
    return (
        <div className='flex flex-col gap-5'>
            <OwnerListHeader />
            <OwnerListBody />
        </div>
    )
}
