import React, { useState } from "react";
import "../assets/signup.css";
import { BsFillBagFill } from "react-icons/bs";
import { AiFillLock, AiTwotoneMail } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [userObject, setUserObject] = useState({
    name: "",
    userid: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmitUserDetails = (event) => {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value });
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://crowded-jay-capris.cyclic.app/api/users/register-user/",
      data: userObject,
      headers: {
        "Content-Type": `application/json`,
      },
    })
      .then((res) => {
        if (res.data.success === true) {
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signupContainer">
      <div
        style={{
          color: "#5F1A82",
          fontSize: "52px",
          textAlign: "center",
          padding: "2rem",
          fontWeight: "700",
        }}
      >
        TESTAPP
      </div>
      <div className="signup_container">
        <form className="formContainer" onSubmit={handleSubmitData}>
          <div className="formOne">
            <div className="labelOne">
              <label htmlFor="name">
                <BsFillBagFill style={{ fontSize: "1.5rem" }} />
              </label>
              <span> Name</span>
            </div>
            <input
              type="text"
              name="name"
              value={userObject.name}
              onChange={handleSubmitUserDetails}
              required
            />
          </div>
          <div className="formOne">
            <div className="labelOne">
              <label htmlFor="email">
                <AiTwotoneMail style={{ fontSize: "1.5rem" }} />
              </label>
              <span>Email</span>
            </div>
            <input
              type="email"
              name="email"
              value={userObject.email}
              onChange={handleSubmitUserDetails}
              required
            />
          </div>
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
              value={userObject.userid}
              onChange={handleSubmitUserDetails}
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
              value={userObject.password}
              onChange={handleSubmitUserDetails}
              required
            />
          </div>
          <br />
          <button
            type="submit"
            style={{ width: "60%", padding: "0.5rem", borderRadius: "0.5rem" }}
          >
            REGISTER NOW
          </button>
        </form>
        <div className="signin_login">
          <div>Already have a account?</div>
          <Link to="/login">Click here to signin</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
