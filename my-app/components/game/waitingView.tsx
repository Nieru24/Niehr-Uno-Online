'use client';
import { useState } from 'react';
import io from 'socket.io-client';
import { useGameSocket } from '../../hooks/useGameSocket';
import PlayerCard from '../ui/playerCard';
import { Crown, LogOut, Users, Copy, Check, Wifi, Play } from 'lucide-react';

const socket = io('http://localhost:5000');

export default function WaitingRoom() {
  const { roomName, roomCodeReceived } = useGameSocket(socket);
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReady = () => {
    const newReady = !isReady;
    setIsReady(newReady);
  };

  return (
    <div className="m-10 flex w-full max-w-[80ch] flex-1 flex-col items-center justify-start rounded-2xl border border-solid border-text-main/20 bg-mainbackground shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex w-full flex-row items-center justify-between gap-3 border-b border-text-main/20 px-6 py-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-text-main">Test's Room</h1>
          <div className="mt-0.5 flex items-center gap-1.5">
            <Wifi size={12} className="text-uno-green" />
            <span className="text-xs text-text-main/50">
              4/10 Players Connected
            </span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg border border-input-border bg-input-bg/80 px-4 py-2 font-mono text-sm text-text-main transition-all hover:cursor-pointer hover:border-secondary-hover hover:ring-1 hover:ring-secondary/20"
        >
          <span className="text-xs uppercase tracking-widest text-text-main/50">
            Code
          </span>
          <span className="font-bold">------</span>
          {copied ? (
            <Check size={14} className="text-uno-green" />
          ) : (
            <Copy size={14} className="text-text-main/40" />
          )}
        </button>
      </div>

      {/* Player List */}
      <div className="flex-1 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Users size={14} className="text-text-main/50" />
          <span className="text-xs uppercase tracking-widest text-text-main/50">
            Playersss
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <PlayerCard
            isHost={true}
            playerName="Test Player 1"
            isReady={true}
            isMe={false}
          />
          <PlayerCard
            isHost={false}
            playerName="Test Player 2"
            isReady={false}
            isMe={true}
          />
          <PlayerCard
            isHost={false}
            playerName="Test Player 3"
            isReady={true}
            isMe={true}
          />
          <PlayerCard
            isHost={false}
            playerName="Test Player 4asdadadadasd"
            isReady={false}
            isMe={false}
          />
          <PlayerCard />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full border-t border-text-main/20 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-main/50">Ready Players</span>
          <span className="text-xs text-text-main/50">9/10</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-input-bg/80">
          <div
            className="h-full w-1/4 rounded-full bg-primary transition-all duration-300"
            style={{ width: '90%' }}
          ></div>
        </div>
      </div>

      {/* Footer - Leave room button & Start game/ready*/}
      <div className="flex w-full items-center justify-between border-t border-text-main/20 p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-text-main/20 px-4 py-3 text-sm font-bold text-text-main/60 transition-all hover:cursor-pointer hover:border-uno-red/60 hover:bg-uno-red/5 hover:text-uno-red sm:w-auto">
          <LogOut size={14} className="text-text-main/50" />
          <span className="text-xs uppercase tracking-widest text-text-main/50">
            Leave Room
          </span>
        </button>

        <button
          onClick={handleReady}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all hover:cursor-pointer sm:w-auto ${
            isReady
              ? 'border border-uno-green/40 bg-uno-green/20 text-uno-green hover:border-uno-red/40 hover:bg-uno-red/10 hover:text-uno-red'
              : 'bg-secondary text-text-main hover:bg-secondary-hover'
          } `}
        >
          {isReady && <Check size={15} />}
          {isReady ? 'Ready! (click to cancel)' : 'Ready Up'}
          {/* Other design if the host "Start Game with crown" */}
        </button>
      </div>
    </div>
  );
}
