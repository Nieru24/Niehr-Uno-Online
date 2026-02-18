import RoomCard from "./roomCard";

export default function Lobby() {
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
        <h2 className="text-text-main text-2xl font-bold mb-8">Game Lobby</h2>

        <div className="flex flex-col gap-6 w-full">
          <input
            type="text"
            id="player-name"
            placeholder="Player Name"
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
            className="w-full px-4 py-3 
              bg-input-bg/80 backdrop-blur-sm
              border border-input-border
              rounded-lg text-text-main text-xs sm:text-base
              outline-none transition-all duration-300
              focus:border-secondary-hover focus:ring-2 focus:ring-secondary/20 focus:shadow-glow-brown"
            required
          />
        </div>

        <button className="mt-8 w-full py-3 bg-secondary text-xs sm:text-base text-text-main rounded-lg font-bold hover:bg-secondary-hover transition-all">
          Join Game
        </button>
      </div>

      <div className="h-[2px] w-[80%] sm:w-[2px] sm:h-[80%] border border-solid border-text-main/20" />

      <div className="flex flex-1 flex-col w-full sm:max-w-[70ch] sm:h-[80%] p-8 sm:p-10">
        <h2 className="text-text-main text-2xl font-bold mb-4 text-center">Rooms</h2>

        <div
          className="flex flex-1 flex-col gap-2
            w-full p-2
            bg-input-bg/80 backdrop-blur-sm
            border border-input-border
            rounded-lg
            overflow-y-auto custom-scrollbar"
        >
          <RoomCard roomName="Pogiasdasddasdta" currentPlayers={3} maxPlayers={10} />
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