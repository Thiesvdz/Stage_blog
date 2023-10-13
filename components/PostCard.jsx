import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { FormatDate } from '../utils/formatDate';

const PostCard = ({ post }) => {
  const category = post.categories[0];
  const bgColor = category.slug === 'stage-2' ? 'bg_color_stage_2' : 'bg_color_stage_1';
  const color = category.slug === 'stage-2' ? 'color_stage_2' : 'color_stage_1';

  return (
    <div className="glass_card shadow-lg rounded-lg p-0 pb-12 mb-8">
      {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
      <div className="relative overflow-hidden shadow-md post_image mb-6">
        <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg g" />
      </div>

      <h1 className={`transition duration-700 text-center mb-8 cursor-pointer hover:${color} text-3xl font-semibold`}>
        <Link href={`/post/${post.slug}`}>{`${post.title} | ${category.name}`}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle  ml-2 font-medium text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium ">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 inline mr-2 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{FormatDate(post.postDate)}</span>
        </div>
      </div>
      <p className="text-center text-lg  font-normal px-4 lg:px-20 mb-8">
        {/* {post.excerpt} */}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className={`transition duration-500 ease transform hover:-translate-y-1 inline-block ${bgColor} text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer`}>Continue Reading</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
