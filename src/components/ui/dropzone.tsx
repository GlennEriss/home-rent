'use client'
import React, { useCallback, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { useDropzone } from 'react-dropzone';

export const DropzoneField = ({
    name,
    numberImage,
    control,
    ...rest
}: {
    name: string;
    numberImage: number
    control: Control<any>;
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Dropzone numberImage={numberImage} onDrop={onChange} value={value} {...rest} />
            )}
        />
    );
};

const Dropzone = ({
    numberImage,
    onDrop,
    value,
    ...rest
}: {
    numberImage: number;
    onDrop: (files: File[]) => void;
    value: File[];
}) => {
    const [filePreviews, setFilePreviews] = useState<string[]>([]);

    const handleDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.slice(0, numberImage - value.length);
        const previews = newFiles.map(file => URL.createObjectURL(file));
        setFilePreviews(prev => [...prev, ...previews]);
        onDrop([...value, ...newFiles]);
    }, [onDrop, value, numberImage]);

    const handleRemoveFile = (index: number) => {
        const newFiles = value.filter((_, i) => i !== index);
        const newPreviews = filePreviews.filter((_, i) => i !== index);
        setFilePreviews(newPreviews);
        onDrop(newFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
        <div {...getRootProps()} className="p-4 border border-dashed border-gray-300 rounded-md">
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Déposez les fichiers ici...</p>
            ) : (
                <p>Glissez-déposez des fichiers ici, ou cliquez pour sélectionner des fichiers</p>
            )}
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:mt-4">
                {filePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                        <img src={preview} alt={`Preview ${index}`} className="w-32 h-32 object-cover m-2" />
                        <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};