import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Test from "./pages/Test";
// import io from "socket.io-client";

// const socket = io("http://localhost:3000");
// export const SocketContext = createContext();

function App() {
  return (
    <div className="m-4">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<h1>Error 404: Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
