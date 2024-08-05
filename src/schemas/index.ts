/**
 * @module schemas
 */

import { z } from 'zod'


export const formLoginSchema = z.object({
  email: z.string().email('formLoginSchema.invalidEmail').min(1, 'formLoginSchema.requiredEmail'),
  password: z.string()
})
export const formApartmentSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  area: z.string().min(1, 'Area is required'),
  location: z.string().min(1, 'Location is required'),
  rate: z.string().min(0, 'Rate must be a positive string'),
  state: z.enum(['FOR_RENT', 'FOR_SALE']),
  numberOfRooms: z.string().min(0, 'string of rooms must be a positive string'),
  numberOfBathrooms: z.string().min(0, 'string of bathrooms must be a positive string'),
  numberOfKitchens: z.string().min(0, 'string of kitchens must be a positive string'),
  numberOfToilets: z.string().min(0, 'string of toilets must be a positive string'),
  apartmentNumber: z.string().min(0, 'string of floor must be a positive string'),
  mainImageUrl: z.array(z.instanceof(File)),
  images: z.array(z.instanceof(File)),
  owner: z.any()
});

export const formHouseSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  area: z.string().min(1, 'Area is required'),
  location: z.string().min(1, 'Location is required'),
  rate: z.string().min(0, 'Rate must be a positive number'),
  state: z.enum(['FOR_SALE', 'FOR_RENT']),
  numberOfRooms: z.string().min(1, 'Number of rooms is required'),
  numberOfBathrooms: z.string().min(1, 'Number of bathrooms is required'),
  numberOfKitchens: z.string().min(1, 'Number of kitchens is required'),
  numberOfToilets: z.string().min(1, 'Number of toilets is required'),
  numberOfFloors: z.string().min(1, 'Apartment number is required'),
  mainImageUrl: z.array(z.instanceof(File)),
  images: z.array(z.instanceof(File)),
  owner: z.any()
});

export const formLandSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  area: z.string().min(1, 'Area is required'),
  location: z.string().min(1, 'Location is required'),
  rate: z.string().min(0, 'Rate must be a positive number'),
  mainImageUrl: z.array(z.instanceof(File)),
  images: z.array(z.instanceof(File)),
  owner: z.any()
});

export const formStudioSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  area: z.string().min(1, 'Area is required'),
  location: z.string().min(1, 'Location is required'),
  rate: z.string().min(0, 'Rate must be a positive number'),
  state: z.enum(['FOR_SALE', 'FOR_RENT']),
  numberOfRooms: z.string().min(1, 'Number of rooms is required'),
  numberOfBathrooms: z.string().min(1, 'Number of bathrooms is required'),
  numberOfKitchens: z.string().min(1, 'Number of kitchens is required'),
  numberOfToilets: z.string().min(1, 'Number of toilets is required'),
  studioNumber: z.string().min(1, 'Studio number is required'),
  mainImageUrl: z.array(z.instanceof(File)),
  images: z.array(z.instanceof(File)),
  owner: z.any()
});

export const formOwnerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required')
});

export type FormOwnerSchema = z.infer<typeof formOwnerSchema>;
export type FormStudioSchema = z.infer<typeof formStudioSchema>;
export type FormLandSchema = z.infer<typeof formLandSchema>;
export type FormHouseSchema = z.infer<typeof formHouseSchema>;
export type FormApartmentSchema = z.infer<typeof formApartmentSchema>;
export type FormLoginSchema = z.infer<typeof formLoginSchema>
