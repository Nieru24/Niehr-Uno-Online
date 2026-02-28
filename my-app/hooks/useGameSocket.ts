import { useState, useEffect } from 'react';

interface Player {
  id: string;
  name: string;
  isHost: boolean;
}

interface Room {
  roomCode: string;
  roomName: string;
  players: Player[];
  maxPlayers: number;
}

interface Socket {
  on: (event: string, callback: (data: any) => void) => void;
  off: (event: string, callback?: (data: any) => void) => void;
  emit: (event: string, data?: any) => void;
  connected: boolean;
  connect: () => void;
}

export const useGameSocket = (socket: Socket) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeRoomCode, setActiveRoomCode] = useState<string | null>(null);

  useEffect(() => {
    if (!socket.connected) socket.connect();

    // Lobby Updates
    socket.on('updateRoomList', (data: Room[]) => setRooms(data));

    // Error Alerts
    socket.on('error', (message: string) => alert(message));

    // Room Join Confirmation
    socket.on('roomJoined', (data: { roomCode: string }) => {
      setActiveRoomCode(data.roomCode);
      console.log("Hook confirmed we are in room:", data.roomCode);
    });

    return () => {
      socket.off('error');
      socket.off('updateRoomList');
      socket.off('roomJoined');
    };
  }, [socket]);

  return { rooms, activeRoomCode };
};
