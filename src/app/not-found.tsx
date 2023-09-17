'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function NotFound() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center  p-8 md:p-1/5">
      <div className="w-full md:w-2/5 aspect-[3/2] relative mb-8">
        <Image src={'/loading.gif'} fill alt="not found" />
      </div>
      <h1 className="text-3xl">Not found</h1>
      <div
        onClick={() => {
          router.back();
        }}
        className="text-black my-8 px-4 bg-yellow-400 rounded-full pixel-border cursor-pointer"
      >
        Restart
      </div>
    </div>
  );
}

export default NotFound;
