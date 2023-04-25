import CrewList from '../components/CrewList';

function Crew() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-black bg-[url('/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto h-screen max-w-screen-xl px-6 md:h-full lg:flex lg:h-screen lg:flex-col lg:justify-between">
        <div className="mt-32 flex w-full justify-center font-barlow text-base tracking-[.25em] md:justify-start md:text-xl lg:mt-44 lg:text-2xl">
          <p className="font-bold text-gray-600">02</p>
          <p className="ml-4 uppercase text-white">Meet your crew</p>
        </div>
        <div className="flex items-center justify-around ">
          <CrewList />
        </div>
      </div>
    </div>
  );
}

export default Crew;
