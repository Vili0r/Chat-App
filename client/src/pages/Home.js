import React, { useState } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { joinRoom } from "../features/room";

const socket = io.connect("http://localhost:3002");

const Home = () => {
  const room = useSelector((state) => state.room.value);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [showChat, setShowChat] = useState(false);

  const startChat = () => {
    if (room.username !== "" && room.number !== "") {
      socket.emit("join_room", room.number);
      setShowChat(true);
    }
  };

  return (
    <>
      {!showChat ? (
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700">
              Chat App
            </h2>

            <h3 className="mt-1 text-xl font-medium text-center text-gray-600">
              Welcome Back
            </h3>

            <p className="mt-1 text-center text-gray-500">Start Chatting</p>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Room Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                onClick={() => {
                  dispatch(joinRoom({ number, username }));
                  startChat();
                }}
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Join Room
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Chat socket={socket} />
      )}
    </>
  );
};

export default Home;
