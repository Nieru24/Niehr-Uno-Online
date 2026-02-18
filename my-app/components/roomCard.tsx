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

  return (
    <div
      className="
        flex flex-row h-12 w-full
        px-3 sm:p-3
        bg-mainbackground/60
        rounded-md
        items-center
        justify-between
        border border-solid border-text-main/10
        hover:bg-mainbackground/70 transition-all
        hover:border-secondary-hover hover:ring-2 hover:ring-secondary/20 hover:shadow-glow-brown
      "
    >
      <div className="text-text-main text-xs sm:text-base font-medium min-w-0">{roomName}'s Room</div>

      <div className="flex flex-row items-center gap-2 shrink-0">
        <span className={`text-sm ${isFull ? "text-red-400" : "text-text-main/70"}`}>
          {currentPlayers}/{maxPlayers}
        </span>
        <button
          onClick={onJoin}
          disabled={isFull}
          className="
            w-[10ch] px-3 py-1
            bg-secondary text-text-main
            rounded font-bold text-xs sm:text-base
            hover:bg-secondary-hover hover:cursor-pointer
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