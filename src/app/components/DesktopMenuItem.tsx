import Link from 'next/link';

type Props = {
  title: string;
  order: number;
  path: string;
};

function DesktopMenuItem({ title, order, path }: Props) {
  return (
    <Link
      href={`/${
        title.toLocaleLowerCase() === 'home' ? '' : title.toLowerCase()
      }`}
      className={`flex items-center gap-2 ${
        path === title.toLowerCase() && 'border-b-4 !border-b-white'
      } border-b-4 border-b-transparent py-8 font-barlow tracking-[.25em] text-white transition-all duration-100 ease-in-out hover:border-b-secondary`}
    >
      <h3 className="hidden font-bold lg:block">0{order}</h3>
      <span className="uppercase">{title}</span>
    </Link>
  );
}

export default DesktopMenuItem;
