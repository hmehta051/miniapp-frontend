import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ backgroundColor: "purple" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>GYMGOER</h1>
      <div
        style={{
          width: "100%",
          height: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Link to="/signup">
          <button
            style={{
              border: "none",
              padding: "1rem",
              width: "100px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            SignUp
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{
              border: "none",
              padding: "1rem",
              width: "100px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
