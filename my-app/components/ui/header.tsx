'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [playersOnline, setPlayersOnline] = useState(23);

  return (
    <div className="border-civease-border sticky left-0 top-0 z-50 flex w-full flex-col items-center border-b-2 border-solid bg-mainbackground p-4 px-6 sm:flex-row sm:justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="mr-1 flex items-center justify-center text-3xl font-black text-text-main">
            Niehr
          </h1>
          <h1 className="flex items-center justify-center text-3xl font-normal text-text-main">
            Project
          </h1>
        </div>
        <h1 className="font-base flex items-center justify-center text-lg text-text-main">
          Online Uno
        </h1>
      </div>

      <div className="mt-2 flex items-center gap-2 sm:mt-0">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-uno-green opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-uno-green" />
        </span>
        <span className="text-sm font-medium text-text-main/70">
          {playersOnline} players online
        </span>
      </div>
    </div>
  );
}
