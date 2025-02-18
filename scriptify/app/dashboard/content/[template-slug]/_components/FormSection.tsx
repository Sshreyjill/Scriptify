"use client";

import React, { useState } from 'react';
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any;
    loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    };

    return (
        <div 
            className="p-5 shadow-lg border rounded-lg text-white"
            style={{
                fontFamily: 'Open Sans, sans-serif',
                backgroundColor: '#000', // Set a background color instead of an image
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' // Improves text readability
            }}
        >
            {selectedTemplate?.icon && (
                <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
            )}
            
            <h2 className="font-bold text-2xl mb-2">{selectedTemplate?.name}</h2>
            <p className="text-gray-200 text-lg">{selectedTemplate?.desc}</p>

            <form className="mt-6 w-full max-w-lg" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className="my-2 flex flex-col gap-2 mb-7">
                        <label className="font-bold">{item.label}</label>
                        {item.field === 'input' ? (
                            <Input
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                                className="text-white placeholder-gray-400 bg-gray-800 border-gray-600 focus:border-white focus:ring-white"
                            />
                        ) : item.field === 'textarea' ? (
                            <Textarea
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                                className="text-white placeholder-gray-400 bg-gray-800 border-gray-600 focus:border-white focus:ring-white"
                            />
                        ) : null}
                    </div>
                ))}
                <Button 
                    type="submit" 
                    className="w-full py-6 bg-blue-600 hover:bg-blue-500"
                    disabled={loading}
                >
                    {loading && <Loader2Icon className='animate-spin' />}
                    Generate content!
                </Button>
            </form>
        </div>
    );
}

export default FormSection;
