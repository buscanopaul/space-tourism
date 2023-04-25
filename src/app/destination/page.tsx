import MoonList from '../components/MoonList';

function Destination() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center bg-black bg-[url('/destination/background-destination-desktop.jpg')] bg-cover bg-center bg-no-repeat px-6 pb-20 lg:h-screen lg:pb-20">
      <div className="mx-auto flex max-w-screen-xl flex-col lg:mt-10">
        <div className="mt-32 flex justify-center text-center font-barlow tracking-[.25em] text-white animate-in slide-in-from-top-3 duration-700 md:justify-start md:text-left md:text-xl lg:text-2xl">
          <p className="font-bold text-gray-600">01</p>
          <p className="ml-4 uppercase">Pick your destination</p>
        </div>
        <MoonList />
      </div>
    </div>
  );
}

export default Destination;
