"use client";
import { useState } from "react";
import { RefreshCcw } from "lucide-react";
import RoomCard from "./roomCard";

export default function Lobby() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  /* Left-side Logic*/
  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.target.value);
  };

  const handleJoinGame = () => {
    // Logic to join the game using playerName and roomCode
  };

  const handleCreateRoom = () => {
    console.log("Create Room clicked with playerName:", playerName);
  };


  /* Right-side Logic */
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };


  return (
    <div
      className="flex flex-1 flex-col sm:flex-row 
                    w-full max-w-[120ch] h-auto sm:h-140 
                    justify-start items-center m-10 
                    bg-mainbackground backdrop-blur-md
                    border border-solid border-text-main/20 rounded-2xl
                    shadow-2xl"
    >
      {/* Left panel */}
      <div className="flex w-full sm:max-w-[50ch] flex-col p-10 justify-center items-center">
        <h2 className="text-text-main text-2xl font-bold">Game Lobby</h2>
        <h2 className="text-text-main text-center text-sm italic">
          Enter a room code or choose from the list to join.
        </h2>
        <h2 className="text-text-main text-center text-sm italic mb-8">
          Or create your own room.
        </h2>

        <div className="flex flex-col gap-6 w-full">
          <input
            type="text"
            id="player-name"
            placeholder="Player Name"
            onChange={handlePlayerNameChange}
            className="w-full px-4 py-3 
              bg-input-bg/80 backdrop-blur-sm
              border border-input-border
              rounded-lg text-text-main text-xs sm:text-base
              outline-none transition-all duration-300
              focus:border-secondary-hover focus:ring-2 focus:ring-secondary/20 focus:shadow-glow-brown"
            required
          />
          <input
            type="text"
            id="room-code"
            placeholder="Room Code"
            onChange={handleRoomCodeChange}
            className="w-full px-4 py-3 
              bg-input-bg/80 backdrop-blur-sm
              border border-input-border
              rounded-lg text-text-main text-xs sm:text-base
              outline-none transition-all duration-300
              focus:border-secondary-hover focus:ring-2 focus:ring-secondary/20 focus:shadow-glow-brown"
            required
          />
        </div>

        <button className="mt-8 w-full py-3 bg-primary text-xs sm:text-base text-text-main rounded-lg font-bold hover:bg-primary-hover transition-all">
          Join Game
        </button>

        <div className="flex items-center w-full max-w-[40ch] gap-2 py-3 my-1">
          <div className="flex-1 h-[1px] bg-text-main/20"></div>
          <p className="text-text-main uppercase text-xs font-medium select-none">
            OR
          </p>
          <div className="flex-1 h-[1px] bg-text-main/20"></div>
        </div>

        <button onClick={handleCreateRoom} className="w-full py-3 bg-secondary text-xs sm:text-base text-text-main rounded-lg font-bold hover:bg-secondary-hover transition-all">
          Create Room
        </button>
      </div>

      <div className="h-[2px] w-[80%] sm:w-[2px] sm:h-[80%] border border-solid border-text-main/20" />

      <div className="flex flex-1 flex-col w-full sm:max-w-[70ch] sm:h-[80%] p-8 sm:p-10">
        <div className="flex flex-row items-center justify-center gap-2 mb-4">
          <h2 className="text-text-main text-2xl font-bold">Rooms</h2>
          <button
            onClick={handleRefresh}
            className="
              p-1.5
              text-text-main
              rounded font-bold
              hover:cursor-pointer
              hover:border-secondary-hover hover:ring-1 hover:ring-secondary/20 hover:shadow-glow-brown
              transition-all
            "
          >
            <RefreshCcw
              size={16}
              className={`transition-transform ${isRefreshing ? "animate-spin-reverse" : ""}`}
            />
          </button>
        </div>

        <div
          className="flex flex-1 flex-col gap-2
            w-full p-2
            bg-input-bg/80 backdrop-blur-sm
            border border-input-border
            rounded-lg
            overflow-y-auto custom-scrollbar"
        >
          <RoomCard
            roomName="Pogiasdasddasdta"
            currentPlayers={3}
            maxPlayers={10}
          />
          <RoomCard roomName="Nieru" currentPlayers={9} maxPlayers={10} />
          <RoomCard roomName="HAHAHA" currentPlayers={7} maxPlayers={10} />
          <RoomCard roomName="Pogita" currentPlayers={3} maxPlayers={10} />
          <RoomCard roomName="Nieru" currentPlayers={10} maxPlayers={10} />
          <RoomCard roomName="HAHAHA" currentPlayers={7} maxPlayers={10} />
          <RoomCard roomName="Pogita" currentPlayers={3} maxPlayers={10} />
          <RoomCard roomName="Nieru" currentPlayers={10} maxPlayers={10} />
          <RoomCard roomName="HAHAHA" currentPlayers={7} maxPlayers={10} />
          <RoomCard roomName="Pogita" currentPlayers={3} maxPlayers={10} />
          <RoomCard roomName="Nieru" currentPlayers={10} maxPlayers={10} />
          <RoomCard roomName="HAHAHA" currentPlayers={7} maxPlayers={10} />
          <RoomCard roomName="Pogita" currentPlayers={3} maxPlayers={10} />
          <RoomCard roomName="Nieru" currentPlayers={10} maxPlayers={10} />
          <RoomCard roomName="HAHAHA" currentPlayers={7} maxPlayers={10} />
          <RoomCard roomName="Pogita" currentPlayers={3} maxPlayers={10} />
          <RoomCard roomName="Nieru" currentPlayers={10} maxPlayers={10} />
          <RoomCard roomName="HAHAHA" currentPlayers={7} maxPlayers={10} />
        </div>
      </div>
    </div>
  );
}
