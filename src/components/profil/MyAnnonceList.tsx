'use client'
import React, { useState } from 'react'
import MyAnnonceListHeader from './MyAnnonceListHeader'
import MyAnnonceListBody from './MyAnnonceListBody'

export default function MyAnnonceList() {
  const [activeFilter, setActiveFilter] = useState('En cours');
  const [activeTypeFilter, setActiveTypeFilter] = useState('Apartment')
  return (
    <div>
      <MyAnnonceListHeader 
      activeFilter={activeFilter} 
      setActiveFilter={setActiveFilter}
      activeTypeFilter={activeTypeFilter}
      setActiveTypeFilter={setActiveTypeFilter}
      />
      <MyAnnonceListBody
      activeFilter={activeFilter} 
      setActiveFilter={setActiveFilter}
      activeTypeFilter={activeTypeFilter}
      setActiveTypeFilter={setActiveTypeFilter}
      />
    </div>
  )
}
