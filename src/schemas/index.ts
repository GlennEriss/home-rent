/**
 * @module schemas
 */


import { z } from 'zod'


export const formLoginSchema = z.object({
    email: z.string().email('email invalide').min(1, 'email invalide'),
    password: z.string().min(4, "mot de passe invalide")
})

export type FormLoginSchema = z.infer<typeof formLoginSchema>



export const formRegisterSchema = z.object({
    nom: z.string().min(1, 'Nom requis'),
    prenom: z.string().min(1, 'Prénom requis'),
    dateNaiss: z.string().min(1, 'Date de naissance requise'),
    email: z.string().email('Email invalide').min(1, 'Email requis'),
    password: z.string().min(4, 'Mot de passe invalide')
});

export type FormRegisterSchema = z.infer<typeof formRegisterSchema>;