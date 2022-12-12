import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/chat">Chat</Link>
    </div>
  );
};

export default Navbar;
