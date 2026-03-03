'use client';
import Lobby from '@/components/game/lobbyView';
import WaitingRoom from '@/components/game/waitingView';
import GameView from '@/components/game/gameView';

import socket from '@/lib/socket';
import { useGameSocket } from '@/hooks/useGameSocket';
import { useState } from 'react';

export default function Home() {
  
  const { activeRoomCode, rooms } = useGameSocket(socket);
  const currentRoom = rooms.find((r) => r.roomCode === activeRoomCode) ?? null;

  const [inGame, setInGame] = useState(false);

  return (
    <main
      className="relative flex w-full flex-1 bg-[#1a1d1d] font-sans"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(226, 39, 39, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(214, 162, 48, 0.1) 0%, transparent 40%)
        `,
      }}
    >
      <div className="flex w-full items-center justify-center p-4">
        {!activeRoomCode ? (
          <Lobby rooms={rooms} />
        ) : !currentRoom ? (
          <div className="text-text-main">Loading room...</div>
        ) : !inGame ? (
          <WaitingRoom
            roomCode={activeRoomCode}
            currentRoom={currentRoom}
          />
        ) : (
          <GameView roomCode={activeRoomCode} />
        )}
      </div>
    </main>
  );
}
