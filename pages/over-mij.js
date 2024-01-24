import React from 'react';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';

const AboutMe = () => (
  <div className="container mx-auto px-5 mb-8">
    <div className="flex flex-col md:flex-row items-center">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt="Afbeelding Thies van der Zon"
        height="450px"
        width="450px"
        className="rounded-full shadow-lg"
        src="/Blog-img.jpeg"
      />
      <div className="ml-0 md:ml-12 mt-6 md:mt-0">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Over mij</h1>
        <p className="text-base">Mijn naam is Thies van der Zon, ik ben 19 jaar oud en zit op het Mediacollege Amsterdam.</p>
        <p className="text-base">Momenteel doe ik de opleiding Software Developer, en zit nu in het laatste jaar van mijn opleiding.</p>
        <p className="text-base mt-4">Bijkijk mijn
          <a href="https://thies-vdz.nl" target="_blank" rel="noreferrer" className="text-base text-purple-600 hover:text-purple-800"> portfolio </a>
          om meer over mij te weten te komen.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
