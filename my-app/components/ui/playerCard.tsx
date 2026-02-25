import React from 'react';
import { Crown } from 'lucide-react';

type PlayerCardProps = {
  isHost: boolean;
  playerName: string;
  isReady?: boolean;
  isMe?: boolean;
};

export default function playerCard({
  isHost = false,
  playerName = 'Empty',
  isReady = false,
  isMe = false,
}: PlayerCardProps) {
  return (
    <div
      className={`relative flex min-w-[16ch] flex-col items-center justify-center gap-2 rounded-xl border p-4 transition-all duration-300 ${isReady || isHost ? 'border-uno-green/40 bg-uno-green/5' : 'border-text-main/10 bg-input-bg/40'} ${isMe ? 'ring-1 ring-secondary/40' : ''}`}
    >
      {/* Owner crown */}
      {isHost && (
        <div className="absolute -right-2 -top-2 rounded-full bg-uno-yellow p-1">
          <Crown size={10} className="text-uno-black" />
        </div>
      )}

      {/* Avatar */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${isHost ? 'bg-uno-yellow/20 text-uno-yellow' : 'bg-secondary/20 text-text-main'} ${playerName == 'Empty' ? 'border-2 border-dashed border-text-main/10 bg-transparent' : ''}`}
      >
        {playerName == 'Empty' ? '?' : playerName.charAt(0).toUpperCase()}
      </div>

      {/* Name */}
      <div className="flex flex-col items-center gap-0.5">
        <span
          className={`max-w-[10ch] truncate text-xs font-semibold text-text-main`}
        >
          {playerName}
        </span>
        <span
          className={`text-[10px] font-medium ${isHost ? 'text-uno-yellow' : isReady ? 'text-uno-green' : 'text-text-main/30'}`}
        >
          {isHost ? 'Host' : isReady ? 'Ready' : 'Not Ready'}
          {isMe && <span className="text-text-main/40"> (you)</span>}
        </span>
      </div>
    </div>
  );
}
