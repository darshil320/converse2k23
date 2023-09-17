'use client';

import React, { useEffect, useRef } from 'react';
import {
  FEST_END_AT,
  FEST_NAME,
  FEST_START_AT,
  FEST_YEAR,
} from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Marquee from './Marquee';
import Timer from './Timer';
import Tv from './Tv';


const Hero = () => {
  const [active, setActive] = React.useState(0);
  const router = useRouter();
   const parallaxRef = useRef(null);

   useEffect(() => {
     const handleScroll = () => {
       if (parallaxRef.current) {
         const scrollY = window.scrollY;
         parallaxRef.current.style.backgroundPositionY = -scrollY / 2 + 'px';
       }
     };

     window.addEventListener('scroll', handleScroll);

     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((prev) => (prev === 0 ? 3 : prev - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((prev) => (prev === 3 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        router.push(routes[active].path);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [active]);

  return (
    <div
      ref={parallaxRef}
      className={`bg-cover bg-center bg-no-repeat bg-fixed flex flex-col bg-['/mview.png'] md:bg-[url('/tab.png')] items-center lg:bg-[url('/bg.png')] justify-center w-full min-h-screen mx-auto my-0 py-6 `}
    >
      <div className="max-w-1200 justify-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-bold italic text-transparent uppercase converse">
          {FEST_NAME}
        </h1>
        <h2
          className="text-4xl md:text-6xl font-bold mt-2 uppercase festdate"
          style={{
            WebkitTextStroke: '0.1px #bebebe',
          }}
        >
          year {FEST_YEAR}
        </h2>

        <div className="w-full mt-16 grid grid-cols-12 gap-4">
          {/* Navigations */}

          <div className="md:col-span-6 col-span-12 border-2 border-white rounded-md">
            {/* Left Section */}

            <div className="px-8 py-6 bg-[#1a0c26]">
              <div className="flex gap-4">
                <div className="md:h-7 md:w-7 w-6 h-6" />

                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold  text-green-400 col-span-10 uppercase">
                  Explore the fest
                </h3>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                {routes.map((route, index) => (
                  <div
                    className="flex gap-4 items-center w-fit"
                    key={index}
                    onMouseEnter={() => setActive(index)}
                  >
                    <div className="md:h-7 md:w-7 w-6 h-6 relative flex justify-center">
                      {active === index && (
                        <Image
                          src={'/icons/coin.png'}
                          alt="coin"
                          fill
                          objectFit="contain"
                          unoptimized
                        />
                      )}
                    </div>
                    <Link
                      href={route.path}
                      className="uppercase text-base md:text-xl lg:text-2xl"
                    >
                      select <span className="text-2xl">&lowast;</span> from{' '}
                      {route.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}

            <div className="w-full py-4 px-8 border-t-2 border-white">
              <Marquee />
            </div>
          </div>

          <div className="md:col-span-6 col-span-12 relative rounded-md  min-h-48 flex  justify-center ">
            <Timer startDate={FEST_START_AT} endDate={FEST_END_AT} />
            <Tv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const routes = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'events',
    path: '/events',
  },
  {
    name: 'sponsors',
    path: '/sponsors',
  },
  {
    name: 'teams',
    path: '/teams',
  },
];
