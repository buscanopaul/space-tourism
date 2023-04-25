import { BsFillCircleFill } from 'react-icons/bs';
import { Crew } from '../typings';

type CrewBulletItemProps = {
  crew: Crew;
  onClick: () => void;
  active: string;
};

function CrewBulletItem({ crew, onClick, active }: CrewBulletItemProps) {
  return (
    <button onClick={onClick} className="group">
      <BsFillCircleFill
        className="transition duration-100 ease-in-out group-hover:fill-gray-300"
        size="0.6em"
        color={`${active === crew.name ? 'white' : 'gray'}`}
      />
    </button>
  );
}

export default CrewBulletItem;
