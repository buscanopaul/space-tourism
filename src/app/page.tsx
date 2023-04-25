import Link from 'next/link';

export default function Home() {
  return (
    <div
      className={`relative h-full w-full bg-[url("/home/background-home-desktop.jpg")] bg-cover bg-center bg-no-repeat pt-32 md:pt-40 lg:h-screen`}
    >
      <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center px-6 text-center lg:flex-row lg:items-end lg:justify-between lg:pb-32 lg:text-left">
        <div className="mb-32 lg:mb-0">
          <p className="font-barlow text-lg tracking-[.25em] text-secondary md:text-xl lg:text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-bellefair text-[80px] text-white md:text-[9.375rem]">
            SPACE
          </h1>
          <p className="mg:text-base max-w-lg text-[15px] leading-loose text-secondary lg:text-lg">
            Let&apos;s face it. If you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge on it.
            Well sit back,and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link
          href={`/destination`}
          className="mb-20 flex h-40 w-40 items-center justify-center rounded-full bg-white text-center md:h-60 md:w-60 lg:mb-0 lg:h-64 lg:w-64"
        >
          <span className="font-bellefair text-xl text-primary md:text-2xl">
            EXPLORE
          </span>
        </Link>
      </div>
    </div>
  );
}
