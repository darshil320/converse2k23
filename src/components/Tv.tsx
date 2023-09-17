import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tvImage from '../../public/tv.png';

const Tv = () => {
  return (
    <div className="relative hidden lg:flex">
        <Image src={tvImage} height={420} width={420} alt="tv" />
        <div className="absolute md:top-[100px] md:left-[80px] bg-black md:w-[182px] md:h-[120px] rounded-[20px] text-center flex items-center overflow-hidden">
          <Image src='https://i.pinimg.com/originals/80/1c/2f/801c2f39070b2e35c2d775d10863d14f.gif' width={250} height={250} alt=''/>
        </div>
      </div>
  );
};

export default Tv;