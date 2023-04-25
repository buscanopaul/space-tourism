'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenuItem from './MobileMenuItem';

type MobileMenuProps = {
  onClick: () => void;
};

function MobileMenu({ onClick }: MobileMenuProps) {
  const pathname = usePathname();
  let newPath = 'home';
  if (pathname !== '/') {
    newPath = pathname.replace('/', '');
  }

  return (
    <div
      className={`block absolute h-screen right-0 -top-5 w-3/5 bg-[#0B0D17]/50 backdrop-blur-lg`}
    >
      <div className="flex flex-row items-end justify-end p-5 mb-8">
        <button onClick={onClick} className="mt-2">
          <Image
            src={require('../../../public/logos/icon-close.svg')}
            width={24}
            height={24}
            alt="Close"
          />
        </button>
      </div>
      <div>
        <MobileMenuItem
          onClick={onClick}
          number="00"
          title="Home"
          path={newPath}
        />
        <MobileMenuItem
          onClick={onClick}
          number="01"
          title="Destination"
          path={newPath}
        />
        <MobileMenuItem
          onClick={onClick}
          number="02"
          title="Crew"
          path={newPath}
        />
        <MobileMenuItem
          onClick={onClick}
          number="03"
          title="Technology"
          path={newPath}
        />
      </div>
    </div>
  );
}

export default MobileMenu;
