'use client';

import { Transition } from '@tailwindui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = useCallback(() => {
    setMobileMenu(!mobileMenu);
  }, []);

  const handleClose = useCallback(() => {
    setMobileMenu(false);
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      setMobileMenu(false);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className="absolute top-5 z-10 flex w-full items-center justify-between animate-in slide-in-from-top duration-500 md:top-0 lg:top-10">
      <Link href={`/`}>
        <Image
          className="ml-5"
          src={require('../../../public/logos/logo.svg')}
          width={40}
          height={40}
          alt="Space Tourism"
        />
      </Link>
      <div className="absolute left-40 z-10  hidden w-1/3 border-b border-b-white opacity-30 lg:block" />
      <DesktopMenu />
      <button
        onClick={handleMobileMenu}
        className="absolute right-0 mr-5 md:hidden"
      >
        <Image
          src={require('../../../public/logos/icon-hamburger.svg')}
          width={24}
          height={24}
          alt="Menu"
        />
      </button>

      <Transition show={mobileMenu}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <MobileMenu onClick={handleClose} />
        </Transition.Child>
      </Transition>
    </div>
  );
}

export default Nav;
