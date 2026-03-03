export interface Player {
  id: string;
  name: string;
  isHost: boolean;
}

export interface Room {
  roomCode: string;
  roomName: string;
  players: Player[];
  maxPlayers: number;
}