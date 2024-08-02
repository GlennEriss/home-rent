import React from 'react'
import ApartmentList from './ApartmentList';
import LandList from './LandList';
import HouseList from './HouseList';
import StudioList from './StudioList';

type MyAnnonceListBodyProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeTypeFilter: string;
  setActiveTypeFilter: (filter: string) => void;
};

export default function MyAnnonceListBody({ activeFilter, setActiveFilter, activeTypeFilter, setActiveTypeFilter }: MyAnnonceListBodyProps) {
  let ComponentToRender;

  switch (activeTypeFilter) {
    case 'Apartment':
      ComponentToRender = ApartmentList;
      break;
    case 'House':
      ComponentToRender = HouseList;
      break;
    case 'Land':
      ComponentToRender = LandList;
      break;
    case 'Studio':
      ComponentToRender = StudioList;
      break;
    default:
      ComponentToRender = () => <div>Select a valid filter type</div>;
  }

  return (
    <div className='mt-5'>
      <ComponentToRender />
    </div>
  )
}