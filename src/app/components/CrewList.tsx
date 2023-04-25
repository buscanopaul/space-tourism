'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

import data from '../../../data.json';
import CrewBulletItem from './CrewBulletItem';

function CrewList() {
  const [activeCrew, setActiveCrew] = useState(data.crew[0]);

  const handleCurrentCrew = useCallback((crew: any) => {
    setActiveCrew(crew);
  }, []);

  return (
    <div className="relative flex w-full flex-col-reverse items-center justify-start text-center md:flex-col lg:flex-row lg:text-left">
      <div className="flex w-full flex-col-reverse justify-between md:flex-col lg:w-1/2">
        <div className="mt-0 text-white md:mt-20 lg:mt-0">
          <p className="mb-1 font-bellefair text-base uppercase text-white opacity-40 md:text-2xl lg:text-3xl">
            {activeCrew.role}
          </p>
          <p className="mb-4 font-bellefair text-2xl uppercase text-white md:text-4xl lg:text-5xl">
            {activeCrew.name}
          </p>
          <p className="font-barlowNormal text-[15px] text-secondary md:text-base lg:text-lg">
            {activeCrew.bio}
          </p>
        </div>
        <div className="py-7 lg:mt-20">
          <ul className="flex items-center justify-center gap-5 lg:justify-start">
            {data.crew.map((crew, index) => (
              <li key={index}>
                <CrewBulletItem
                  onClick={() => handleCurrentCrew(crew)}
                  active={activeCrew.name}
                  crew={crew}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        className="mt-10 border-b border-b-[#383B4B] px-28  md:border-b-0 md:px-12 lg:w-2/5"
        src={require(`../../../public${activeCrew.images.png}`)}
        width={400}
        height={400}
        alt="Moon"
      />
    </div>
  );
}

export default CrewList;
