import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { AiOutlineHome } from 'react-icons/ai';
import { MdAccountBox } from 'react-icons/md';
import MyAnnonceList from './MyAnnonceList';
import MyInformation from './MyInformation';
import { GrCircleInformation } from 'react-icons/gr';
import OwnerList from './OwnerList';

export default function FormProfile() {
  const tabs = [
    {
      title: 'Mes annonces',
      icon: <AiOutlineHome size={20} />,
      component: <MyAnnonceList/>
    },
    {
      title: 'Propriétaires',
      icon: <MdAccountBox size={20} />,
      component: <OwnerList/>
    },
    {
      title: 'Mes informations',
      icon: <GrCircleInformation size={20} />,
      component: <MyInformation/>
    }
  ];

  return (
    <Card className="border-0 shadow-lg rounded-lg overflow-hidden lg:border lg:border-gray-100">
      <CardContent className="p-4 bg-white">
        <Tabs defaultValue="0">
          <TabsList className="flex w-full bg-[#2f3d7f] rounded-t-lg">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                className={`flex-1 flex gap-1 items-center justify-center text-white ${index === 0 ? 'rounded-tl-lg' : ''} ${index === tabs.length - 1 ? 'rounded-tr-lg' : ''} hover:bg-[#1f2a5f] focus:outline-none`}
                value={index.toString()}
              >
                {tab.icon}
                <span className='hidden md:block'>{tab.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent key={index} value={index.toString()} className="p-4 bg-white">
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}