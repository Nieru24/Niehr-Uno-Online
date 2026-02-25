import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

export const useGameSocket = (socket: Socket) => {
  const [roomName, setRoomName] = useState("");
  const [roomCodeReceived, setRoomCodeReceived] = useState("");

  useEffect(() => {
    const handleRoom = (data: any) => {
      setRoomCodeReceived(data.roomCode);
      setRoomName(data.roomName);
      console.log("Room joined:", data);
    };

    const handleError = (error: any) => {
      alert(error);
    };


    socket.on("error", handleError);
    socket.on("roomJoined", handleRoom);

    return () => {
      socket.off("roomJoined");
      socket.off("error");
    };


  }, [socket]);

  return { roomName,roomCodeReceived };
};