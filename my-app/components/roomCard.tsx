interface RoomCardProps {
  roomName?: string;
  currentPlayers?: number;
  maxPlayers?: number;
  onJoin?: () => void;
}

export default function RoomCard({
  roomName = "Room Name",
  currentPlayers = 1,
  maxPlayers = 10,
  onJoin,
}: RoomCardProps) {
  const isFull = currentPlayers >= maxPlayers;
  const fillPercent = (currentPlayers / maxPlayers) * 100;

  const barColor =
    fillPercent === 100
      ? "bg-uno-red"
      : fillPercent >= 70
      ? "bg-uno-yellow"
      : "bg-uno-green";

  return (
    <div
      className="
        flex flex-row h-12 w-full
        px-3 sm:p-1
        bg-mainbackground/60
        rounded-md
        items-center
        justify-between
        gap-2
        border border-solid border-text-main/10
        hover:bg-mainbackground/70 transition-all
        hover:border-secondary-hover hover:ring-2 hover:ring-secondary/20 hover:shadow-glow-brown
      "
    >
      <div className="text-text-main text-xs sm:text-base font-medium truncate min-w-0">
        {roomName}'s Room
      </div>

      <div className="flex flex-row items-center gap-2 shrink-0">
        {/* Progress bar */}
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-xs text-text-main/50">
            {currentPlayers}/{maxPlayers}
          </span>
          <div className="w-16 sm:w-24 h-1.5 bg-text-main/10 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${barColor}`}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={onJoin}
          disabled={isFull}
          className="
            w-[10ch] px-3 py-1
            bg-primary text-text-main
            rounded font-bold text-xs sm:text-base
            hover:bg-primary-hover hover:cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all
          "
        >
          {isFull ? "Full" : "Join"}
        </button>
      </div>
    </div>
  );
}