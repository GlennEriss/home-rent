'use client'
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from '@/navigation';

export default function FormRegisterComponent() {
  return (
    <>
      <h1 style={{ fontSize: "40px", marginBottom: "30px", color: '#EC7D3A' }}>
        <b>Nouveau Compte:</b>
      </h1>
      <Input
        type="text"
        placeholder="entre ton nom"
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
      <Input
        type="text"
        placeholder="entre ton prenom"
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
      <Input
        type="date"
        placeholder="entre ta date de naissance"
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
      <Input
        type="password"
        placeholder="entre ton mot de passe"
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
      
      
      <Link href="/login" type="submit" style={{ padding:"5px",width: "150px", backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold' }}>
        Créer
      </Link>

      <small style={{ marginTop: "50px" }}>
        <Link href="/login" style={{ display: 'block', marginBottom: '1rem', textAlign: 'right', color: '#000', textDecoration: 'none' }}>
          J'ai déjà un compte, je souhaite <b style={{ color: "#EC7D3A" }}>me connecter</b>
        </Link>
      </small>
    </>
  );
}
