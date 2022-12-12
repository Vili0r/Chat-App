import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

function Test() {
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  const [room, setRoom] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    });
  }, [socket]);

  return (
    <div className="m-4">
      {receivedMessage && (
        <span className="max-w-lg mt-6 text-gray-500">{receivedMessage}</span>
      )}
      <input
        placeholder="Enter Room..."
        onChange={(e) => setRoom(e.target.value)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
      />

      <button
        onClick={joinRoom}
        className="px-8 py-2.5 mt-4 leading-5 text-white transition-colors duration-300 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Join
      </button>

      <input
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
      />
      <button
        onClick={sendMessage}
        className="px-8 py-2.5 mt-4 leading-5 text-white transition-colors duration-300 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Send
      </button>
    </div>
  );
}

export default Test;
