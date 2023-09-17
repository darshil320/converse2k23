'use client';

import React, { useState } from 'react';
import events from '@/lib/data/events';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ReactMarkdown from 'react-markdown';

import {
  generateTicket,
  ticketAlreadyGenerated,
} from '@/lib/actions/ticket.actions';
import { errorToast, successToast } from '@/components/ui/Toast';
import { ToastContainer } from 'react-toastify';
import Spinner from '@/components/ui/Spinner';
import Link from 'next/link';

const SingleEventPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const router = useRouter();
  const user = useUser();
  const userId = user.user?.id;
  // console.log(userId);
  const event = events.find((event) => event.eventId === params.slug);
  const [isLoading, setLoading] = useState(false);

  if (!event) {
    router.push('/events');
    return null;
  }

  const handleRegistration = async () => {
    console.log('hello');
    try {
      if (!userId) {
        router.push('/sign-in');
      } else {
        setLoading(true);
        let ticketCheck = await ticketAlreadyGenerated({
          userId,
          eventId: event.eventId,
        });

        if (ticketCheck) {
          errorToast('you have already registered for this event');
        } else {
          const res = await generateTicket({
            userId,
            eventId: event.eventId,
          });
          if (res.status) {
            successToast('event registeraton successfull');
          }
        }
        setLoading(false);
      }
    } catch (err) {}
  };

  return (
    <div className="w-full min-h-[90vh] mx-auto mt-8">
      <h1 className="text-3xl mb-8">
        <Link href="/">Home </Link> {'>'} <Link href="/events">Events </Link>{' '}
        {'>'} {event?.eventName}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="w-full h-max md:sticky relative top-10 left-0 flex flex-col pb-8">
          <div className="mb-4">
            <img
              src={
                'https://converse2k22.vercel.app/assets/posters/Logo%20Hunt.png'
              }
              alt="event poster"
              className="rounded-sm"
            />
          </div>

          <button
            type="button"
            className="PixellButton w-full min-w-full md:text-lg text-base uppercase"
            onClick={handleRegistration}
          >
            {isLoading ? <Spinner /> : 'Participate'}
          </button>
        </div>

        <div className="md:mt-0 md:col-span-2 mt-4 w-full h-full">
          <h1 className="md:text-4xl text-2xl text-[#e2e202] font-bold">
            {event.eventName}
          </h1>

          <div className="mt-6" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">Description</h3>

          <div className="mt-2" />

          <ReactMarkdown>{event.description}</ReactMarkdown>

          <div className="mt-4" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">
            Faculty Coordinators
          </h3>

          {event.facultyCoordinators.map((coordinator, index) => (
            <p key={index} className="md:text-base text-sm mt-2">
              {coordinator.name}
            </p>
          ))}

          <div className="mt-4" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">Event Heads</h3>

          {event.eventHeads.map((head, index) => (
            <p key={index} className="md:text-base text-sm mt-2">
              {head.name}&nbsp;-&nbsp;
              <a href={`tel:${head.number}`}>{head.number}</a>
            </p>
          ))}

          <div className="mt-4" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">
            Event Volunteers
          </h3>

          {event.eventVolunteers.map((volunteer, index) => (
            <p key={index} className="md:text-base text-sm mt-2">
              {volunteer.name}
              {/* <a href={`tel:${volunteer.number}`}>{volunteer.number}</a> */}
            </p>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleEventPage;
