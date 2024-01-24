import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const ChooseCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 ">
      {categories.map((category, index) => {
        const bgColor = category.slug === 'stage-2' ? 'bg_color_stage_2' : 'bg_color_stage_1';
        return (
          <div className="glass_card shadow-lg rounded-lg p-0 pb-12 mb-8" key={index}>
            <div className="relative overflow-hidden shadow-md mb-6 category_image">
              <img src={category.categoryImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg g" />
            </div>

            <h1 className="transition duration-700 text-center mb-8 cursor-pointer text-3xl font-semibold">
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="cursor-pointer block py-2">{category.name}</span>
              </Link>
            </h1>
            <div className="text-center">
              <Link href={`/category/${category.slug}`}>
                <span className={`transition duration-500 ease transform hover:-translate-y-1 inline-block ${bgColor} text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer`}>Meer lezen</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChooseCategory;
