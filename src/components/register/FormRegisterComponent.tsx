'use client'
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Link } from '@/navigation';
import { formRegisterSchema,FormRegisterSchema } from '@/schemas';

export default function FormRegisterComponent() {
  const form = useForm<FormRegisterSchema>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      nom: '',
      prenom: '',
      dateNaiss: '',
      email: '',
      password: ''
    },
  });

  async function onSubmit(data: FormRegisterSchema) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form method='post'
        className='flex flex-col space-y-4'
        onSubmit={form.handleSubmit(onSubmit)}>
        
        <h1 style={{ fontSize: "40px", marginBottom: "30px", color: '#EC7D3A' }}>
          <b>Nouveau Compte:</b>
        </h1>
        
        <FormField
          control={form.control}
          name='nom'
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="entre ton nom"
                  {...field}
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
              </FormControl>
              {error && <span className='font-semibold text-[0.8rem] text-red-500'>{error.message}</span>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='prenom'
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="entre ton prenom"
                  {...field}
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
              </FormControl>
              {error && <span className='font-semibold text-[0.8rem] text-red-500'>{error.message}</span>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='dateNaiss'
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="date"
                  placeholder="entre ta date de naissance"
                  {...field}
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
              </FormControl>
              {error && <span className='font-semibold text-[0.8rem] text-red-500'>{error.message}</span>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="entre ton adresse email"
                  {...field}
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
              </FormControl>
              {error && <span className='font-semibold text-[0.8rem] text-red-500'>{error.message}</span>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="entre ton mot de passe"
                  {...field}
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
              </FormControl>
              {error && <span className='font-semibold text-[0.8rem] text-red-500'>{error.message}</span>}
            </FormItem>
          )}
        />

        <Button type="submit" style={{ padding: "5px", width: "150px", backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold' }}>
          Créer
        </Button>

        <small style={{ marginTop: "50px" }}>
          <Link href="/login" style={{ display: 'block', marginBottom: '1rem', textAlign: 'right', color: '#000', textDecoration: 'none' }}>
            J'ai déjà un compte, je souhaite <b style={{ color: "#EC7D3A" }}>me connecter</b>
          </Link>
        </small>
      </form>
    </Form>
  );
}
