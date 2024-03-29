import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => {
  const category = post.categories[0];
  const bgColor = category.slug === 'stage-2' ? 'gradient_stage_2' : 'gradient_stage_1';
  return (
    <div className="relative h-72">
      <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" />
      <div className={`absolute rounded-lg bg-center ${bgColor} w-full h-72`} />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
        <p className="text-white mb-4 text-shadow font-semibold text-xs">{category.name}</p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
        </div>
      </div>
      <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
  );
};

export default FeaturedPostCard;
