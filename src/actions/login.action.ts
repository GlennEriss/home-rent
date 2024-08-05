'use server'

import { redirect } from '@/navigation'
import { formLoginSchema, FormLoginSchema } from '@/schemas'
import { cookies } from 'next/headers'

export const login = async (values: FormLoginSchema) => {
  const validatedFields = formLoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return { success: false, error: true, message: 'invalidFields' }
  }
  const { email, password } = validatedFields.data
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      }
    )
    
    if (!response.ok) {
      // Handle server errors
      const errorData = await response.json();
      console.error('Server error:', errorData);
      throw new Error('Login failed');
    }

    const { jwt } = await response.json()
    
    // Store the token in cookies
    cookies().set('token', jwt, { path: '/' });

    return { success: true }

  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, error: true, message: 'loginFailed' }
  }
}