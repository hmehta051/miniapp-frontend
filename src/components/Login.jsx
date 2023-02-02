import React, { useState } from "react";
import "../assets/signup.css";
import { AiFillLock } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [loginData, setLoginData] = useState({
    userid: "",
    password: "",
  });
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleUser = (e) => {
    e.target.style.backgroundColor = "#FBDE02";
    setRole("user");
  };
  const handleOwner = (e) => {
    e.target.style.backgroundColor = "gray";
    setRole("admin");
  };
  const handleChangeData = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmitLoginData = (e) => {
    e.preventDefault();

    if (role === "") {
      alert("Please choose Role");
    } else if (role === "user") {
      axios({
        method: "POST",
        url: "https://crowded-jay-capris.cyclic.app/api/users/login-user/",
        data: loginData,
        headers: {
          "Content-Type": `application/json`,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            navigate("/city-map");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (role === "admin") {
      axios({
        method: "POST",
        url: "https://crowded-jay-capris.cyclic.app/api/users/login-admin/",
        data: loginData,
        headers: {
          "Content-Type": `application/json`,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            navigate("/qr");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  return (
    <div className="signupContainer">
      <div
        style={{
          color: "#5F1A82",
          fontSize: "52px",
          textAlign: "center",
          padding: "2rem",
          paddingBottom: "8rem",
          fontWeight: "700",
        }}
      >
        TESTAPP
      </div>
      <div className="signup_container">
        <div className="btnDiv">
          <button className="btnPass" onClick={handleUser}>
            USER
          </button>
          <button className="btnPass adminPass" onClick={handleOwner}>
            OWNER
          </button>
        </div>
        <form className="formContainer" onSubmit={handleSubmitLoginData}>
          <div className="formOne">
            <div className="labelOne">
              <label htmlFor="userid">
                <HiOutlineUser style={{ fontSize: "1.5rem" }} />
              </label>
              <span>UserId</span>
            </div>

            <input
              type="text"
              name="userid"
              value={loginData.userid}
              onChange={handleChangeData}
              required
            />
          </div>
          <div className="formOne">
            <div className="labelOne">
              <label htmlFor="password">
                <AiFillLock style={{ fontSize: "1.5rem" }} />
              </label>
              <span>Password</span>
            </div>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChangeData}
              required
            />
          </div>
          <br />
          <button
            type="submit"
            style={{ width: "60%", padding: "0.5rem", borderRadius: "0.5rem" }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
