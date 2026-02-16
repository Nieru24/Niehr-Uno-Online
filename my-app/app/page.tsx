import Lobby from "@/components/lobby";

export default function Home() {
  return (
    // flex-1 makes this take up all space below the header
    <main
      className="relative flex flex-1 w-full font-sans bg-[#1a1d1d]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(226, 39, 39, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(214, 162, 48, 0.1) 0%, transparent 40%)
        `,
      }}
    >
      <div className="flex w-full items-center justify-center p-4">
        <Lobby />
      </div>
    </main>
  );
}