import EventCard from '@/components/EventCard';
import React from 'react';
import Image from 'next/image';
import events from '@/lib/data/events';
import { currentUser } from '@clerk/nextjs';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';

const Events = async () => {
  const user = await currentUser();

  return (
    <div className="flex flex-col w-full min-h-[90vh] mx-auto mt-8">
      <h1 className="text-3xl mb-3">
        <Link href="/">Home </Link> {'>'} Events
      </h1>
      <p>Register here for all the Awesome events</p>

      <div className="grid grid-cols-12 w-full max-w-1200 mx-auto my-0 p-4 ">
        {events.map((event, index) => (
          <div className="grid justify-center col-span-12 md:col-span-6 xl:col-span-4">
            <EventCard
              key={index}
              userId={user ? user.id : null}
              event={event}
            />
          </div>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Events;
