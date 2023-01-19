/* eslint-disable no-console */
import React from 'react';
import { genres } from '../assets/constants';
import { SongCard } from '../components/index';

function Discover() {
  console.log(genres);
  return (
    <section className="pt-8">
      <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </section>
  );
}

export default Discover;
