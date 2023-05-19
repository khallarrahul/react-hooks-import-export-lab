import React from "react";
import { username, city } from "../data/user";

const divStyle = {
  color: "firebrick",
};

function Home() {
  return (
    <div id="home">
      <h1 style={divStyle}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
