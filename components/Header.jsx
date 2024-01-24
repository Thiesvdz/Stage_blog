import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <div className="container mx-auto px-5 mb-8 ">
    <div className="border-b w-full inline-block border-white-400 py-4 flex items-center justify-between">
      <div className="md:float-left block">
        <Link href="/">
          <span className="text-white font-semibold cursor-pointer flex items-center gap-4">
            <Image
              width="64px"
              height="64px"
              src="/tz.png"
            />
            STAGE BLOG THIES
          </span>
        </Link>
      </div>
      <Link href="/over-mij">
        <span className="mt-2 align-middle text-white font-semibold cursor-pointer">
          OVER MIJ
        </span>
      </Link>
    </div>
  </div>
);

export default Header;
