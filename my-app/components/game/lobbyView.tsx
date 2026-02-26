'use client';
import { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import RoomCard from '../ui/roomCard';
import socket from '../../lib/socket';
import { useGameSocket } from '../../hooks/useGameSocket';



export default function Lobby() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const { rooms } = useGameSocket(socket);

  /* Input Logic*/
  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };
  const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.target.value);
  };

  /* Button Logic */
  const handleJoinGame = () => {
    socket.emit('joinRoom', { playerName, roomCode });
  };

  const handleCreateRoom = () => {
    socket.emit('createRoom', { playerName });
  };

  const handleRefresh = () => {
    socket.emit('requestRoomList');
  };

  return (
    <div className="sm:h-140 m-10 flex h-auto w-full max-w-[120ch] flex-1 flex-col items-center justify-start rounded-2xl border border-solid border-text-main/20 bg-mainbackground shadow-2xl backdrop-blur-md sm:flex-row">
      {/* Left panel */}
      <div className="flex w-full flex-col items-center justify-center p-10 sm:max-w-[50ch]">
        <h2 className="text-2xl font-bold text-text-main">Game Lobby</h2>
        <h2 className="text-center text-sm italic text-text-main">
          Enter a room code or choose from the list to join.
        </h2>
        <h2 className="mb-8 text-center text-sm italic text-text-main">
          Or create your own room.
        </h2>

        <div className="flex w-full flex-col gap-6">
          <input
            type="text"
            id="player-name"
            placeholder="Player Name"
            onChange={handlePlayerNameChange}
            className="w-full rounded-lg border border-input-border bg-input-bg/80 px-4 py-3 text-xs text-text-main outline-none backdrop-blur-sm transition-all duration-300 focus:border-secondary-hover focus:shadow-glow-brown focus:ring-2 focus:ring-secondary/20 sm:text-base"
            required
          />
          <input
            type="text"
            id="room-code"
            placeholder="Room Code"
            onChange={handleRoomCodeChange}
            className="w-full rounded-lg border border-input-border bg-input-bg/80 px-4 py-3 text-xs text-text-main outline-none backdrop-blur-sm transition-all duration-300 focus:border-secondary-hover focus:shadow-glow-brown focus:ring-2 focus:ring-secondary/20 sm:text-base"
            required
          />
        </div>

        <button
          onClick={handleJoinGame}
          className="mt-8 w-full rounded-lg bg-primary py-3 text-xs font-bold text-text-main transition-all hover:bg-primary-hover sm:text-base"
        >
          Join Game
        </button>

        <div className="my-1 flex w-full max-w-[40ch] items-center gap-2 py-3">
          <div className="h-[1px] flex-1 bg-text-main/20"></div>
          <p className="select-none text-xs font-medium uppercase text-text-main">
            OR
          </p>
          <div className="h-[1px] flex-1 bg-text-main/20"></div>
        </div>

        <button
          onClick={handleCreateRoom}
          className="w-full rounded-lg bg-secondary py-3 text-xs font-bold text-text-main transition-all hover:bg-secondary-hover sm:text-base"
        >
          Create Room
        </button>
      </div>

      <div className="h-[2px] w-[80%] border border-solid border-text-main/20 sm:h-[80%] sm:w-[2px]" />

      <div className="flex w-full flex-1 flex-col p-8 sm:h-[80%] sm:max-w-[70ch] sm:p-10">
        <div className="mb-4 flex flex-row items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-text-main">Rooms</h2>
          <button
            onClick={handleRefresh}
            className="rounded p-1.5 font-bold text-text-main transition-all hover:cursor-pointer hover:border-secondary-hover hover:shadow-glow-brown hover:ring-1 hover:ring-secondary/20"
          >
            <RefreshCcw
              size={16}
              className={`transition-transform ${isRefreshing ? 'animate-spin-reverse' : ''}`}
            />
          </button>
        </div>

        <div className="custom-scrollbar flex w-full flex-1 flex-col gap-2 overflow-y-auto rounded-lg border border-input-border bg-input-bg/80 p-2 backdrop-blur-sm">
          {rooms.map((room: any) => (
            <RoomCard
              key={room.roomCode}
              roomName={room.roomName}
              currentPlayers={room.players?.length || 0}
              maxPlayers={room.maxPlayers || 10}
              roomCode={room.roomCode}
              onJoin={() => {
                if (!playerName) {
                  alert('Please enter player name.');
                  return;
                } else {
                  socket.emit('joinRoom', {
                    playerName,
                    roomCode: room.roomCode,
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
