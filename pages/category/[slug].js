import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import { FeaturedPosts } from '../../sections';

const CategoryPost = ({ posts = [] }) => { // Default posts to an empty array
  const router = useRouter();

  // Use the first post's category as the page category, default to 'stage-1' if posts are not loaded
  const category = posts.length > 0 ? posts[0].node.categories[0].slug : 'stage-1';

  // Display Loader while the page is being statically generated on demand (fallback: true)
  if (router.isFallback) {
    return <Loader />;
  }

  // Render the page content once posts are available
  return (
    <div className="container mx-auto px-5 mb-8">
      <FeaturedPosts category={category} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  // Ensure 'posts' is always an array to prevent runtime errors
  return {
    props: { posts: posts || [] },
  };
}

// Specify dynamic routes to pre-render pages based on data
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true, // or 'blocking' if you want to wait for the data to be generated at request time
  };
}
