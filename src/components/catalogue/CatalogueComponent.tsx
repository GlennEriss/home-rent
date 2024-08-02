import React from 'react'
import CardItem from '../profil/CardItem'
import { Card, CardHeader, CardTitle } from '../ui/card'

export default function CatalogueComponent() {
    return (
        <div className='flex flex-col lg:flex-row p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <CardItem />
            </div>
            <Card className='lg:ml-auto'>
                <CardHeader>
                    <CardTitle>Catégories</CardTitle>
                </CardHeader>
            </Card>
        </div>

    )
}
