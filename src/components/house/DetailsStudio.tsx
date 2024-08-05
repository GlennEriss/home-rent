'use client';
import React, { useState } from 'react';
import { Studio } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

type DetailsStudioProps = {
  studio: Studio;
};

export default function DetailsStudio({ studio }: DetailsStudioProps) {
  const formatDate = (date: string) => format(new Date(date), 'dd/MM/yyyy', { locale: fr });
  const [activeImage, setActiveImage] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
  };

  // Combine the main image and additional images
  const images = [studio.mainImageUrl, ...studio.images];

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{studio.description}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${images[activeImage]}`}
                  alt="Main Image"
                  width={800}
                  height={600}
                  layout="responsive"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="mt-4 flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <div key={index} className={`w-24 h-24 relative cursor-pointer ${activeImage === index ? 'border-2 border-blue-500' : ''}`} onClick={() => handleThumbnailClick(index)}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      layout="responsive"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card className="shadow-md">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong>Localisation :</strong> {studio.location}
                    </div>
                    <div>
                      <strong>Surface :</strong> {studio.area} m²
                    </div>
                    <div>
                      <strong>Loyer :</strong> {studio.rate} FCFA
                    </div>
                    <div>
                      <strong>Région :</strong> {studio.region}
                    </div>
                    <div>
                      <strong>Statut :</strong> {studio.status}
                    </div>
                    <div>
                      <strong>État :</strong> {studio.state}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong>Nombre de pièces :</strong> {studio.numberOfRooms}
                    </div>
                    <div>
                      <strong>Nombre de salles de bain :</strong> {studio.numberOfBathrooms}
                    </div>
                    <div>
                      <strong>Nombre de cuisines :</strong> {studio.numberOfKitchens}
                    </div>
                    <div>
                      <strong>Nombre de toilettes :</strong> {studio.numberOfToilets}
                    </div>
                    <div>
                      <strong>Numéro de studio :</strong> {studio.studioNumber}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong>ID du propriétaire :</strong> {studio.ownerId}
                    </div>
                    <div>
                      <strong>Créé le :</strong> {formatDate(studio.createdAt!)}
                    </div>
                    <div>
                      <strong>Mis à jour le :</strong> {formatDate(studio.updatedAt!)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}