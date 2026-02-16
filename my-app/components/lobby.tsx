export default function Lobby() {
  return (
    <div className="flex flex-1 flex-row 
                    w-full max-w-[120ch] h-140 
                    justify-start items-center m-10 
                    bg-mainbackground/60 backdrop-blur-md
                    border border-solid border-text-main/20 rounded-2xl
                    shadow-2xl">
      <div className="flex w-full max-w-[50ch] flex-col p-10 justify-center items-center">
        <h2 className="text-text-main text-2xl font-bold mb-8">Game Lobby</h2>

        <div className="flex flex-col gap-6 w-full">
          <div className="relative w-full">
            <input
              type="text"
              id="player-name"
              placeholder="Player Name"
              className="
                w-full px-4 py-3 
                bg-input-bg/80 backdrop-blur-sm
                border border-input-border
                rounded-lg text-text-main
                outline-none transition-all duration-300
                focus:border-secondary-hover focus:ring-2 focus:ring-secondary/20 focus:shadow-glow-brown
              "
              required
            />
          </div>

          <div className="relative w-full">
            <input
              type="text"
              id="room-code"
              placeholder="Room Code"
              className="
                w-full px-4 py-3 
                bg-input-bg/80 backdrop-blur-sm
                border border-input-border
                rounded-lg text-text-main
                outline-none transition-all duration-300
                focus:border-secondary-hover focus:ring-2 focus:ring-secondary/20 focus:shadow-glow-brown
              "
              required
            />
          </div>
        </div>

        <button className="mt-8 w-full py-3 bg-secondary text-text-main rounded-lg font-bold hover:bg-secondary-hover transition-all">
          Join Game
        </button>
      </div>
      <div className="w-[2px] h-[80%] border border-solid border-text-main/20 hidden sm:flex"></div>
      <div></div>
    </div>
  );
}
