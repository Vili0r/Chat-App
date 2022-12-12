import React from "react";
import Contacts from "../components/Contacts";
import Conversations from "../components/Conversations";

const Chat = ({ socket }) => {
  return (
    <div className="container mx-auto">
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <Contacts />
        <div className="hidden lg:col-span-2 lg:block">
          <div className="w-full">
            <Conversations socket={socket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
