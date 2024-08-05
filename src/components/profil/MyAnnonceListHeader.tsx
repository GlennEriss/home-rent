'use client'
import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { Button } from '../ui/button';

const filters = ['En cours', 'Archivé'];
const filterTypes = ['Apartment', 'House', 'Studio', 'Land'];

type MyAnnonceListHeaderProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeTypeFilter: string;
  setActiveTypeFilter: (filter: string) => void;
};

export default function MyAnnonceListHeader({ activeFilter, setActiveFilter, activeTypeFilter, setActiveTypeFilter }: MyAnnonceListHeaderProps) {
  const handleFilterClick = (filterTitle: string) => {
    setActiveFilter(filterTitle);
  };

  const handleTypeFilterClick = (filterTitle: string) => {
    setActiveTypeFilter(filterTitle);
  };

  return (
    <div className='flex flex-col xl:flex-row items-center xl:justify-between'>
      <div className='flex gap-4 items-center'>
        <FiFilter size={30} className='text-[#2f3d7f]' />
        <span className='text-xl font-bold text-[#2f3d7f]'>Filtres</span>
        <div className='flex gap-2'>
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant={activeFilter === filter ? 'filterActive' : 'outline'}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${activeFilter === filter ? '' : 'bg-white text-[#2f3d7f] border-[#2f3d7f]'}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      <div className='flex gap-4 items-center mt-4 xl:mt-0'>
        <div className='grid grid-cols-2 md:flex gap-2'>
          {filterTypes.map((filter, index) => (
            <Button
              key={index}
              variant={activeTypeFilter === filter ? 'filterActive' : 'outline'}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${activeTypeFilter === filter ? '' : 'bg-white text-[#2f3d7f] border-[#2f3d7f]'}`}
              onClick={() => handleTypeFilterClick(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}