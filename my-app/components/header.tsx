"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [playersOnline, setPlayersOnline] = useState(23);

  return (
    <div className="sticky top-0 w-full left-0 z-50 flex flex-col bg-mainbackground items-center p-4 px-6 border-b-2 border-solid border-civease-border sm:flex-row sm:justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="font-black text-3xl text-text-main flex items-center justify-center mr-1">
            Niehr 
          </h1>
          <h1 className="font-normal text-3xl text-text-main flex items-center justify-center">
            Project
          </h1>
        </div>
        <h1 className="font-base text-lg text-text-main flex items-center justify-center">
          Online Uno
        </h1>
      </div>

      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uno-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-uno-green" />
        </span>
        <span className="text-text-main/70 text-sm font-medium">
          {playersOnline} players online
        </span>
      </div>
    </div>
  );
}
