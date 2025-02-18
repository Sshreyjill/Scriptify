import Templates from '@/app/(data)/Templates';
import React, { useEffect, useMemo } from 'react';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: any) {
  console.log('Component Rendered with userSearchInput:', userSearchInput);

  useEffect(() => {
    console.log('useEffect triggered with userSearchInput:', userSearchInput);
  }, [userSearchInput]);

  // Filter templates based on user search input
  const filteredTemplates = useMemo(() => {
    return Templates.filter((template) =>
      template.name.toLowerCase().includes(userSearchInput.toLowerCase()) ||
      template.category.toLowerCase().includes(userSearchInput.toLowerCase()) ||
      template.desc.toLowerCase().includes(userSearchInput.toLowerCase())
    );
  }, [userSearchInput]);

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 min-h-screen"
      style={{
        fontFamily: 'cursive',
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {filteredTemplates.map((item: TEMPLATE) => (
        <div
          key={item.slug}
          className="p-2 rounded-lg transition-all duration-300"
          style={{
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.4)', // Subtle glow
            border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
            borderRadius: '10px',
          }}
        >
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TemplateListSection;
