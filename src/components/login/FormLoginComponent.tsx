'use client'
import { Link } from '@/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function FormLoginComponent() {
  return (
    <>
      <h1 style={{ fontSize: "40px", marginBottom: "30px", color: '#EC7D3A' }}>
        <b>Connexion:</b>
      </h1>
      <Input
        type="email"
        placeholder="entre ton adresse email"
        required
        style={{
          color: "#EC7D3A",
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: "3px double #EC7D3A",
          outline: 'none',
          boxShadow: 'none'
        }}
      />
      <Input type="entre ton mot de passe " placeholder="entre ton mot de passe" required style={{color: "#EC7D3A",width: '100%',padding: '0.5rem',marginBottom: '1rem',borderRadius: '4px',border: "3px double #EC7D3A",outline: 'none',boxShadow: 'none'}} />

      <Link href="/" style={{ padding:"5px",width: "150px", backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold' }}>
        Connexion
      </Link>

      {/* <div style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>Ou connecte toi avec</div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="#">
        <Button style={{ flex: 1, margin: '0 0.5rem', backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', padding: '0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>Facebook</Button>
        <Button style={{ flex: 1, margin: '0 0.5rem', backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', padding: '0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>Google</Button>
        <Button style={{ flex: 1, margin: '0 0.5rem', backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', padding: '0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>LinkedIn</Button>
      </Link>
    </div> */}
      <small style={{ marginTop: "50px" }}>
        <Link href="/register" style={{ display: 'block', marginBottom: '1rem', textAlign: 'right', color: '#000', textDecoration: 'none' }}>Je suis nouveau, je souhaite <b style={{ color: "#EC7D3A" }}>creer un compte</b></Link>
      </small>
    </>
  )
}
