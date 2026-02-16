"use client";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="sticky top-0 w-full left-0 z-50 flex flex-col bg-mainbackground items-center  p-4 px-6 border-b-2 border-solid border-civease-border sm:flex-row">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-3xl text-text-main flex items-center justify-center">
          Niehr Project
        </h1>
        <h1 className="font-extrabold text-1xl text-text-main flex items-center justify-center">
          Online Uno
        </h1>
      </div>
    </div>
  );
}
