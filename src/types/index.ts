export type CreationType = {
    createdAt?: string,
    updatedAt?: string
}
export type Owner = CreationType & {
    id?: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    searchableName?: string
}

export type Property = CreationType & {
    description: string,
    area: number,
    location: string,
    rate: number,
    mainImageUrl: string,
    region: string,
    state: 'FOR_RENT' | 'FOR_SALE',
    status: string,
    images: string[],
    owner: Owner,
    ownerId?: number,
}
export type Land = Property & {
    landType: string
}
export type Accomodation = Property & {
    numberOfRooms: number,
    numberOfBathrooms: number,
    numberOfKitchens: number,
    numberOfToilets: number,
}
export type Apartment = Accomodation & {
    apartmentNumber: string
}

export type House =  Accomodation & {
    numberOfFloors: number
}

export type Studio = Accomodation & {
    studioNumber: string
}