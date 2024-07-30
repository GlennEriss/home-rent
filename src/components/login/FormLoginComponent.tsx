'use client'
import { Link } from '@/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormLoginSchema, formLoginSchema } from '@/schemas'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'

export default function FormLoginComponent() {
  const form = useForm<FormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  async function onSubmit(data: FormLoginSchema) {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form method='post'
        className='flex flex-col space-y-4'
        onSubmit={form.handleSubmit(onSubmit)}>

        <h1 style={{ fontSize: "40px", marginBottom: "30px", color: '#EC7D3A' }}>
          <b>Connexion:</b>
        </h1>

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
                <Input {...field} type="password" placeholder="entre ton mot de passe" style={{ color: "#EC7D3A", width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: "3px double #EC7D3A", outline: 'none', boxShadow: 'none' }} />
              </FormControl>
              {error && <span className='font-semibold text-[0.8rem] text-red-500'>{error.message}</span>}
            </FormItem>
          )}
        />

        <Button  style={{ padding: "5px", width: "150px", backgroundColor: '#EC7D3A', color: '#fff', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold' }}>
          Connexion
        </Button>

        <small style={{ marginTop: "50px" }}>
          <Link href="/register" style={{ display: 'block', marginBottom: '1rem', textAlign: 'right', color: '#000', textDecoration: 'none' }}>Je suis nouveau, je souhaite <b style={{ color: "#EC7D3A" }}>creer un compte</b></Link>
        </small>
      </form>
    </Form>
  )
}



// 'use client'
// import { login } from '@/actions/login.action'
// import { formLoginSchema, FormLoginSchema } from '@/schemas'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useTranslations } from 'next-intl'
// import React, { useState, useTransition } from 'react'
// import { useForm } from 'react-hook-form'
// import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import Link from 'next/link'

// export default function LoginForm() {
//   const t = useTranslations('LoginForm')
//   const [isPending, startTransition] = useTransition()
//   const [passwordVisible, setPasswordVisible] = useState(false)
//   const form = useForm<FormLoginSchema>({
//     resolver: zodResolver(formLoginSchema),
//     defaultValues: {
//       email: '',
//       password: ''
//     },
//   })
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible)
//   }
//   async function onSubmit(data: FormLoginSchema) {
//     startTransition(() => {
//       login(data)
//     })
//   }
//   return (
//     <div className='py-5'>
//       <Form {...form}>
//         <form method='post'
//           className='flex flex-col space-y-4'
//           onSubmit={form.handleSubmit(onSubmit)}>
//           <FormField
//             control={form.control}
//             name='email'
//             render={({ field, fieldState: { error } }) => (
//               <FormItem>
//                 <FormLabel htmlFor='email'>{t('labelEmail')}</FormLabel>
//                 <FormControl>
//                   <Input
//                     className='focus:border-none focus:placeholder:pl-1 focus-visible:ring-2'
//                     disabled={isPending}
//                     type='email'
//                     id='email'
//                     placeholder='Email' {...field} />
//                 </FormControl>
//                 {error && <span className='font-semibold text-[0.8rem] text-red-500'>{t(error.message)}</span>}
//               </FormItem>
//             )}
//           >
//           </FormField>
//           <FormField
//             control={form.control}
//             name='password'
//             render={({ field, fieldState: { error } }) => (
//               <FormItem>
//                 <FormLabel htmlFor='password'>{t('labelPassword')}</FormLabel>
//                 <FormControl>
//                   <div className="p-1 flex items-center bg-transparent border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-black">
//                     <input
//                       className="ml-2 bg-transparent focus:ring-0 focus:outline-none w-full focus:placeholder:pl-1"
//                       disabled={isPending}
//                       type={passwordVisible ? 'text' : 'password'}
//                       placeholder={t('placeholderPassword')}
//                       {...field}
//                     />
//                     <button
//                       disabled={isPending}
//                       type="button"
//                       onClick={togglePasswordVisibility}
//                       className="p-2"
//                     >
//                       {passwordVisible ? <AiOutlineEyeInvisible className='text-black' size={18} /> : <AiOutlineEye className='text-black' size={18} />}
//                     </button>
//                   </div>

//                 </FormControl>
//                 {error && <span className='font-semibold text-[0.8rem] text-red-500'>{t(error.message)}</span>}
//               </FormItem>
//             )}
//           >
//           </FormField>
//           <div className='flex justify-end'>
//             <Link href='' className='text-sm text-red-500'>{t('passwordForget')}</Link>
//           </div>
//           <Button type='submit' disabled={isPending}>
//             {
//               isPending ? (
//                 <div role="status">
//                   <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
//                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
//                   </svg>
//                   <span className="sr-only">Loading...</span>
//                 </div>
//               ) : (
//                 <span>{t('buttonLogin')}</span>
//               )
//             }
//           </Button>
//         </form>
//       </Form>
//     </div>
//   )
// }