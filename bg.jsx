import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from './Marquee';
import Timer from './Timer';
import Tv from './Tv';

import {
  FEST_NAME,
  FEST_YEAR,
  FEST_START_AT,
  FEST_END_AT,
} from '@/lib/constants';

// Import your background image here
import BackgroundImage from '/path/to/your/background.jpg';

const ProjectPage = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full min-h-screen max-w-1200 mx-auto my-0 py-6"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
          <div className="px-8 py-6">
            <div className="flex gap-4">
              <div className="md:h-7 md:w-7 w-6 h-6" />
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-green-400 col-span-10 uppercase">
                Explore the fest
              </h3>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              {/* ... Routes and content ... */}
            </div>
          </div>
          {/* Bottom Section */}
          <div className="w-full py-4 px-8 border-t-2 border-white">
            <Marquee />
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative rounded-md min-h-48 flex justify-center">
          <Timer startDate={FEST_START_AT} endDate={FEST_END_AT} />
          <Tv />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
