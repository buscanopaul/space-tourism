import TechnologyList from '../components/TechnologyList';

function Technology() {
  return (
    <div className="relative flex h-screen w-full flex-col bg-black bg-[url('/technology/background-technology-desktop.jpg')] md:h-full">
      <div className="lg:mx-auto lg:max-w-screen-xl">
        <div className="mt-10 flex justify-center px-6 pt-20 font-barlow text-base tracking-[.25em] md:justify-start md:text-xl lg:pt-40 lg:text-2xl">
          <p className="text-gray-600">03</p>
          <p className="ml-4 text-white">SPACE LAUNCH 101</p>
        </div>
        <TechnologyList />
      </div>
    </div>
  );
}

export default Technology;
