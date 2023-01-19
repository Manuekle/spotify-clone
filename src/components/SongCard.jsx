import React from 'react';

function SongCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 flex flex-col gap-3">
      <figure className="h-full w-full flex justify-center">
        <img
          src="https://i.scdn.co/image/ab67616d0000b27340f69650473301d4b98dbd02"
          alt="song"
          className="w-full h-full object-contain rounded-sm border"
        />
      </figure>
      <h1 className="text-white font-semibold text-sm">Song Name</h1>
      <h2 className="text-gray-400 text-xs">Artist Name</h2>
    </div>
  );
}

export default SongCard;
