import { Technology } from '../typings';

type TechnologyBulletItemProps = {
  tech: Technology;
  onClick: () => void;
  activeTech: Technology;
  index: number;
};

function TechnologyBulletItem({
  tech,
  onClick,
  activeTech,
  index,
}: TechnologyBulletItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-500 text-center text-lg transition duration-100 ease-in-out hover:border-white md:h-14 md:w-14 lg:h-20 lg:w-20 ${
        activeTech.name === tech.name ? 'bg-white text-primary' : 'text-white'
      }`}
    >
      <div className="font-bellefair text-base md:text-2xl lg:text-3xl">
        {index}
      </div>
    </button>
  );
}

export default TechnologyBulletItem;
