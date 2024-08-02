import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { FaUser } from 'react-icons/fa'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import FormProfile from './FormProfile'

export default function ProfilComponent() {
    return (
        <div className='w-screen min-h-screen flex flex-col lg:grid lg:grid-cols-3 gap-3 p-5'>
            <Card className='max-h-[200px] border-0 shadow-lg rounded-lg overflow-hidden lg:sticky lg:border lg:border-gray-100'>
                <CardHeader>
                    <CardTitle className='flex items-center gap-5'>
                        <FaUser size={30} className='text-[#2f3d7f]' />
                        <span className='text-[#2f3d7f]'>
                            Mon profil
                        </span>
                    </CardTitle>
                    <Separator />
                </CardHeader>
                <CardContent className='flex gap-5'>
                    <Avatar className='w-20 h-20'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className='text-xl font-bold text-[#2f3d7f]'>John Doe</h1>
                        <p className='text-gray-400'>john.doe@example.com</p>
                        <p className='text-gray-400 text-sm'>Depuis le 30/07/2024</p>
                    </div>
                </CardContent>
            </Card>
            <div className='lg:col-span-2'>
                <FormProfile />
            </div>
        </div>
    )
}
