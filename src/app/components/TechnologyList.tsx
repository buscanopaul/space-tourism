'use client';

import { CSSProperties, useCallback, useState } from 'react';
import data from '../../../data.json';
import { Technology } from '../typings';
import TechnologyBulletItem from './TechnologyBulletItem';

interface CustomStyles extends CSSProperties {
  '--image-url-desktop'?: string;
  '--image-url-mobile'?: string;
}

function TechnologyList() {
  const [activeTech, setActiveTech] = useState(data.technology[0]);

  const handleActiveTech = useCallback((item: Technology) => {
    setActiveTech(item);
  }, []);

  return (
    <div className="flex-row-reverse lg:flex">
      <div
        style={
          {
            '--image-url-desktop': `url(${activeTech.images.portrait})`,
            '--image-url-mobile': `url(${activeTech.images.landscape})`,
          } as CustomStyles
        }
        className={`right-100 my-10 h-[170px] animate-bounce bg-black bg-[image:var(--image-url-mobile)] bg-center bg-no-repeat duration-150 repeat-0 md:h-[310px] md:bg-cover lg:h-[527px] lg:w-[40%] lg:bg-[image:var(--image-url-desktop)] `}
      />
      <div className="mx-auto flex flex-col items-center justify-start md:max-w-screen-sm lg:w-[60%] lg:max-w-full lg:flex-row lg:px-6 ">
        <ul className="mb-7 flex gap-5 lg:flex-col">
          {data.technology.map((tech, index) => (
            <li key={index}>
              <TechnologyBulletItem
                tech={tech}
                onClick={() => handleActiveTech(tech)}
                activeTech={activeTech}
                index={index + 1}
              />
            </li>
          ))}
        </ul>
        <div className="mx-10 flex flex-col items-center px-6 md:pb-10 lg:items-start">
          <p className="mb-3 font-barlow text-sm uppercase tracking-[.25em] text-secondary md:text-base">
            the terminology ...
          </p>
          <p className="mb-5 font-bellefair text-3xl uppercase text-white md:text-4xl lg:text-5xl">
            {activeTech.name}
          </p>
          <p className="text-center font-barlowNormal text-[15px] leading-relaxed text-secondary md:text-base lg:text-left lg:text-lg">
            {activeTech.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyList;
