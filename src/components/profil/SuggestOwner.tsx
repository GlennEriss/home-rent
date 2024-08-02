"use client"
import React, { useState, useEffect } from 'react';
import { useOwnerContext } from '@/providers/OwnerProvider';
import { Owner } from '@/types';

export default function SuggestOwner({ value, onChange }: { value?: Partial<Owner>, onChange: (owner: Partial<Owner>) => void }) {
    const { owners } = useOwnerContext();
    const [searchTerm, setSearchTerm] = useState(value?.searchableName || '');
    const [suggestions, setSuggestions] = useState<Partial<Owner>[]>([]);
    const [selectedOwner, setSelectedOwner] = useState<Partial<Owner> | null>(value || null);

    useEffect(() => {
        if (owners) {
            if (searchTerm) {
                const filteredOwners = owners.filter(owner =>
                    owner.searchableName?.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSuggestions(filteredOwners);
            } else {
                setSuggestions([]);
            }
        }
    }, [searchTerm, owners]);

    const handleSelect = (owner: Partial<Owner>) => {
        setSelectedOwner(owner);
        setSearchTerm(owner.searchableName || '');
        setSuggestions([]);
        onChange(owner);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un propriétaire"
                className="w-full p-2 border border-gray-300 rounded"
            />
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto z-10">
                    {suggestions.map((owner, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(owner)}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                            {owner.searchableName}
                        </li>
                    ))}
                </ul>
            )}
            {selectedOwner && (
                <div className="mt-2">
                    <span className="font-bold">Propriétaire sélectionné : </span>
                    {selectedOwner.searchableName}
                </div>
            )}
        </div>
    );
}