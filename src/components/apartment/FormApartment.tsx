'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FormField, FormItem, FormLabel, FormControl, Form, FormDescription, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { FormApartmentSchema, formApartmentSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { DropzoneField } from '../ui/dropzone'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useToast } from '../ui/use-toast'
import SuggestOwner from '../profil/SuggestOwner'
import { useRouter } from '@/navigation'
//import { DevTool } from "@hookform/devtools";

export default function FormApartment() {
  const form = useForm<FormApartmentSchema>({
    resolver: zodResolver(formApartmentSchema),
    defaultValues: {
      description: '',
      area: '',
      location: '',
      rate: '0',
      state: "FOR_RENT",
      numberOfRooms: '0',
      numberOfBathrooms: '0',
      numberOfKitchens: '0',
      numberOfToilets: '0',
      apartmentNumber: '0',
      mainImageUrl: [],
      images: [],
      owner: undefined
    },
  })
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()
  const mutation = useMutation({
    mutationKey: ['apartments'],
    mutationFn: async (data: any) => {
      console.log(data)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apartments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add apartment');
      }
      const appart = await response.json()
      console.log(appart)
      return appart;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apartments'] })
      toast({
        title: "Ajout d'un appartement",
        description: "Appartement ajouté avec succès!",
        variant: "success"
      })
      router.push('/profil')
    },
    onError: (error) =>{
      toast({
        title: "Ajout d'un appartement",
        description: error.message,
        variant: "destructive",
        duration: 20
      })
    }
  });
  const { isSubmitting } = form.formState
  async function onSubmit(data: FormApartmentSchema) {
    const validatedFields = formApartmentSchema.safeParse(data)
    if (!validatedFields.success) {
      return { success: false, error: true, message: 'invalidFields' }
    }
    let apartment = validatedFields.data
    let formData = new FormData();
    apartment.mainImageUrl.forEach(file => formData.append('file', file));
    //Upload main image
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
    let url: string = await response.text()
    let apartmentAdd: any = {
      ...apartment,
      images: [],
      mainImageUrl: url.replace(process.env.NEXT_PUBLIC_API_URL_TO_REPLACE!, ''),
    }
    //uplaod all files
    const uploadPromises = apartment.images.map(async file => {
      formData = new FormData();
      formData.append('file', file);
      response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload file');
      }
      url = await response.text()
      apartmentAdd.images.push(url.replace(process.env.NEXT_PUBLIC_API_URL_TO_REPLACE!, ''))
    })
    await Promise.all(uploadPromises);
    mutation.mutate({
      ...apartmentAdd,
      rate: Number(apartmentAdd.rate),
      numberOfRooms: Number(apartmentAdd.numberOfRooms),
      numberOfBathrooms: Number(apartmentAdd.numberOfBathrooms),
      numberOfKitchens: Number(apartmentAdd.numberOfKitchens),
      numberOfToilets: Number(apartmentAdd.numberOfToilets),
      apartmentNumber: Number(apartmentAdd.apartmentNumber),
      status: "ACTIVE",
      owner: { id: apartmentAdd.owner.id },
      region: "DAKAR",
    })
  }
  return (
    <div className='px-10 py-5'>
      <Form {...form}>
        <h1 className='text-2xl font-bold mb-4 text-center md:text-start'>Enregistrez un appartement</h1>
        <form method='post' onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name='mainImageUrl'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='mainImageUrl'>Image principale</FormLabel>
                  <FormControl>
                    <DropzoneField numberImage={1} name='mainImageUrl' control={form.control} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='images'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='images'>Images plus détaillés (au plus 5 images)</FormLabel>
                  <FormControl>
                    <DropzoneField numberImage={5} name='images' control={form.control} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-5'>
            <FormField
              control={form.control}
              name='description'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='description'>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='text'
                      id='description'
                      placeholder='Description de votre appartement' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='area'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='area'>Superficie en m²</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='area'
                      placeholder='70' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='location'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='location'>Adresse de l'appartement</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='text'
                      id='location'
                      placeholder='Adresse' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='rate'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='rate'>Prix de vente ou Loyer par mois (en FCFA)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='rate'
                      placeholder='70000' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>État</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="À vendre/À louer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FOR_RENT">À louer</SelectItem>
                      <SelectItem value="FOR_SALE">À vendre</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='numberOfRooms'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='numberOfRooms'>Nombre de chambres</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='numberOfRooms'
                      placeholder='1' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='numberOfBathrooms'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='numberOfBathrooms'>Nombre de salles de bains</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='numberOfBathrooms'
                      placeholder='1' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='numberOfKitchens'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='numberOfKitchens'>Nombre de cuisines</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='numberOfKitchens'
                      placeholder='1' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='numberOfToilets'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='numberOfToilets'>Nombre de toilettes</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='numberOfToilets'
                      placeholder='1' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='apartmentNumber'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='apartmentNumber'>Numéro de l'appartement</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type='number'
                      id='apartmentNumber'
                      placeholder='1' {...field} />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='owner'
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel htmlFor='owner'>Propriétaire</FormLabel>
                  <FormControl>
                    <SuggestOwner {...field}/>
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting} className='flex items-center justify-center gap-2 bg-[#2f3d7f] text-white py-2 px-4 rounded-lg hover:bg-[#1f2a5f] transition-all duration-300'>
              {
                isSubmitting ? (
                  <div role="status" className="flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Chargement...</span>
                  </div>
                ) : (
                  <span>Créer l'annonce</span>
                )
              }
            </Button>
          </div>
        </form>
      </Form>
     {/*  <DevTool control={form.control} /> */}
    </div>

  )
}
