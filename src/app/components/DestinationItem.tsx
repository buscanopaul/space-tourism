'use client';

type DestinationItemProps = {
  title: string;
  onClick: () => void;
  active: string;
};

function DestinationItem({ title, onClick, active }: DestinationItemProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        title.toLowerCase() === active.toLowerCase() && '!border-b-white'
      } border-b-4 border-b-transparent pb-3 transition-all duration-100 ease-in-out hover:border-b-secondary`}
    >
      <span
        className={`font-barlow text-sm uppercase tracking-[.25em] md:text-base ${
          title.toLowerCase() === active.toLowerCase()
            ? 'text-white'
            : 'text-secondary'
        }`}
      >
        {title}
      </span>
    </button>
  );
}

export default DestinationItem;
