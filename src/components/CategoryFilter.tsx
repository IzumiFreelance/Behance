import React from 'react';
import type { Category } from '../types/project';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (Category | 'all')[] = [
    'all',
    'ui-design',
    'graphic-design',
    'web-development',
    'illustration',
    'photography',
    '3d-art'
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {category.split('-').map(word => 
            word === 'ui' || word === '3d' 
              ? word.toUpperCase() 
              : word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')}
        </button>
      ))}
    </div>
  );
}