import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getSimilarPosts, getRecentPosts } from '../services';
import { FormatDate } from '../utils/formatDate';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="glass_card shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Gerelateerde Posts' : 'Recente Posts'}</h3>
      {relatedPosts.map((post, index) => {
        const bgColor = post.categories[0].slug === 'stage-1' ? 'stage-1-hover' : 'stage-2-hover';
        return (
          <div key={index} className="flex items-center w-full mb-4">
            <div className="flex-grow">
              <p className="text-gray-500 font-xs">{FormatDate(post.postDate)}</p>
              <Link href={`/post/${post.slug}`} key={index}><span className={`text-md cursor-pointer ${bgColor}`}>{`${post.title} | ${post.categories[0].name}`}</span></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
