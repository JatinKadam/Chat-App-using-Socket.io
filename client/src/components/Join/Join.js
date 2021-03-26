import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import "./join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <Typical
            className="heading"
            steps={["Hello", 1000, "Join Now!", 2000]}
            loop={Infinity}
            wrapper="p"
          />
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={"button mt-20"} type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Join;