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
    <div className="flex items-center justify-between absolute lg:top-10 md:top-0 top-5 z-10 w-full">
      <Link href={`/`}>
        <Image
          className="ml-5"
          src={require('../../../public/logos/logo.svg')}
          width={40}
          height={40}
          alt="Space Tourism"
        />
      </Link>
      <div className="border-b border-b-white opacity-30  w-1/3 hidden lg:block absolute left-40 z-10" />
      <DesktopMenu />
      <button
        onClick={handleMobileMenu}
        className="md:hidden mr-5 absolute right-0"
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
