interface RoomCardProps {
  roomName?: string;
  currentPlayers?: number;
  maxPlayers?: number;
  onJoin?: () => void;
}

export default function RoomCard({
  roomName = 'Room Name',
  currentPlayers = 1,
  maxPlayers = 10,
  onJoin,
}: RoomCardProps) {
  const isFull = currentPlayers >= maxPlayers;
  const fillPercent = (currentPlayers / maxPlayers) * 100;

  const barColor =
    fillPercent === 100
      ? 'bg-uno-red'
      : fillPercent >= 70
        ? 'bg-uno-yellow'
        : 'bg-uno-green';

  return (
    <div className="flex h-12 w-full flex-row items-center justify-between gap-2 rounded-md border border-solid border-text-main/10 bg-mainbackground/60 px-3 transition-all hover:border-secondary-hover hover:bg-mainbackground/70 hover:shadow-glow-brown hover:ring-2 hover:ring-secondary/20 sm:p-1">
      <div className="min-w-0 truncate text-xs font-medium text-text-main sm:text-base">
        {roomName}'s Room
      </div>

      <div className="flex shrink-0 flex-row items-center gap-2">
        {/* Progress bar */}
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-xs text-text-main/50">
            {currentPlayers}/{maxPlayers}
          </span>
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-text-main/10 sm:w-24">
            <div
              className={`h-full rounded-full transition-all duration-500 ${barColor}`}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={onJoin}
          disabled={isFull}
          className="w-[10ch] rounded bg-primary px-3 py-1 text-xs font-bold text-text-main transition-all hover:cursor-pointer hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
        >
          {isFull ? 'Full' : 'Join'}
        </button>
      </div>
    </div>
  );
}
