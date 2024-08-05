'use client'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function DeconnexionButton() {
  const [, , removeCookie] = useCookies(['token'])
  const router = useRouter()

  const handleLogout = () => {
    removeCookie('token', { path: '/' })
    router.push('/login')
  }

  return (
    <Button onClick={handleLogout} className='bg-red-500 hover:bg-red-600 text-white py-6 rounded-xl'>
      Déconnexion
    </Button>
  )
}