'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import data from '../../../data.json';
import DestinationItem from './DestinationItem';

function MoonList() {
  const [activeTab, setActiveTab] = useState(data.destinations[0]);

  const handleDestination = useCallback((destination: any) => {
    setActiveTab(destination);
  }, []);

  return (
    <div className="mt-14 flex flex-col items-center justify-center lg:flex-row">
      <div className={`mb-10 w-1/2 animate-in spin-in-6 duration-500`}>
        <Image
          className=""
          src={require(`../../../public${activeTab.images.png}`)}
          width={445}
          height={445}
          alt="Moon"
        />
      </div>
      <div className="relative h-[450px] lg:w-1/3">
        <ul className="mb-10 flex justify-center gap-8 lg:justify-start">
          {data.destinations.map((destination, index) => (
            <li key={index}>
              <DestinationItem
                active={activeTab.name}
                title={destination.name}
                onClick={() => handleDestination(destination)}
              />
            </li>
          ))}
        </ul>
        <h1 className="mb-8 text-center font-bellefair text-5xl uppercase tracking-wide text-white animate-in slide-in-from-right-10 duration-500 md:text-7xl lg:text-left lg:text-8xl">
          {activeTab.name}
        </h1>
        <p className="mb-12 text-center text-base text-secondary animate-in slide-in-from-right-10 duration-500 lg:text-left lg:text-lg">
          {activeTab.description}
        </p>
        <div className="mb-7 w-full border-b border-b-[#383B4B]" />
        <div className="items-center justify-around gap-10 md:flex lg:justify-start">
          <div>
            <p className="text-md mb-2 text-center font-barlow uppercase tracking-[.25em] text-secondary md:text-sm lg:text-left">
              AVG. DISTANCE
            </p>
            <h3 className="mb-8 text-center font-bellefair text-2xl uppercase text-white md:mb-0 md:text-3xl lg:text-left">
              {activeTab.distance}
            </h3>
          </div>
          <div className="animate-in slide-in-from-right-10 duration-700">
            <p className="text-md mb-2 text-center font-barlow uppercase tracking-[.25em] text-secondary md:text-sm">
              EST. TRAVEL TIME
            </p>
            <h3 className="text-center font-bellefair text-2xl uppercase text-white md:text-3xl lg:text-left">
              {activeTab.travel}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonList;
