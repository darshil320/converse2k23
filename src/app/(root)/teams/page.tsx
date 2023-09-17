'use client';
import Cassette from '@/components/Cassette';
import { useRouter } from 'next/navigation';
import teams from '@/lib/data/teams';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Link from 'next/link';

function TeamsPage() {
  const [active, setActive] = useLocalStorage('activeTeam', 0);
  const router = useRouter();

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActive((prev) => (prev !== teams.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActive((prev) => (prev == 0 ? prev : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        router.push(`/teams/${teams[active].slug}`);
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [active]);

  return (
    <div className="flex flex-col w-full min-h-[90vh] mx-auto mt-8">
      <h1 className="text-3xl mb-3">
        <Link href="/">Home </Link> {'>'} Teams
      </h1>
      <p>Meet the faces behind converse</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-x-10 md:gap-y-10 py-10 flex-grow mb-8">
        {teams.map((team, index) => {
          return (
            <Cassette
              key={index}
              title={team.title}
              image={String((index % teams.length) + 1)}
              link={team.slug}
              isActive={index === active}
              handleHover={setActive}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamsPage;
