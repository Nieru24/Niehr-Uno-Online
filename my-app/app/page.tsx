import Lobby from '@/components/game/lobbyView';
import WaitingRoom from '@/components/game/waitingView';

export default function Home() {
  return (
    // aloha
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
        <Lobby />
        {/* <WaitingRoom /> */}
      </div>
    </main>
  );
}
