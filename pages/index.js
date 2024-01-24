import ChooseCategory from '../components/ChooseCategory';
import { getPosts } from '../services';

export default function Home() {
  return (
    <div className="container mx-auto px-5 mb-8">
      <div className="lg:col-span-8 col-span-1">
        <ChooseCategory />
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

