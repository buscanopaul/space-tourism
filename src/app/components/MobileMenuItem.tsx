import Link from 'next/link';

type Props = {
  number: string;
  title: string;
  onClick: () => void;
  path: string;
};

function MobileMenuItem({ number, title, onClick, path }: Props) {
  return (
    <Link
      href={`/${
        title.toLocaleLowerCase() === 'home' ? '' : title.toLowerCase()
      }`}
      onClick={onClick}
      className={`relative flex items-center justify-between border-r-8 border-r-transparent font-barlow uppercase tracking-[.25em] ${
        path === title.toLowerCase() && '!border-r-white'
      } py-4`}
    >
      <div className="flex items-center pl-8 text-white">
        <p className="font-bold">{number}</p>
        <p className="pl-3">{title}</p>
      </div>
      <div className="h-full w-2 bg-white" />
    </Link>
  );
}

export default MobileMenuItem;
