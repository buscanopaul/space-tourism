import { usePathname } from 'next/navigation';
import DesktopMenuItem from './DesktopMenuItem';

function DesktopMenu() {
  const pathname = usePathname();
  let newPath = 'home';
  if (pathname !== '/') {
    newPath = pathname.replace('/', '');
  }

  return (
    <div className="relative -z-10 hidden w-3/5 justify-center gap-10 bg-[#0B0D17]/50 backdrop-blur-lg md:flex">
      <DesktopMenuItem order={0} title="Home" path={newPath} />
      <DesktopMenuItem order={1} title="Destination" path={newPath} />
      <DesktopMenuItem order={2} title="Crew" path={newPath} />
      <DesktopMenuItem order={3} title="Technology" path={newPath} />
    </div>
  );
}

export default DesktopMenu;
