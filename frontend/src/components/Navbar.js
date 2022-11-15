import React, { useContext } from "react";
import logo from "../img/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function Navbar({ login }) {
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {  
      return [
        <>
          <img src={logo} alt="" />
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/createPost">Create Post</Link>
          <Link to={""}>
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>
              Log Out
            </button>
          </Link>
        </>,
      ];
    } else {
    }
  };

  const styles = localStorage.getItem("jwt") ? "'block'" : "'none'";

  return (
    <>
      {console.log(`display:${styles}`)}
      <div className="navbar" style={{  }}>
        <ul className="nav-menu">
          {loginStatus()}
        </ul>
      </div>
    </>
  );
}
