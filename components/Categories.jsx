import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="glass_card shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => {
        const bgColor = category.slug === 'stage-1' ? 'stage-1-hover' : 'stage-2-hover';
        return (
          <Link key={index} href={`/category/${category.slug}`}>
            <span className={`cursor-pointer block ${bgColor} ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} py-2 `}>{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
