import React from "react";
import "./Main.css"; // Import CSS file for main section styles
import profileImage from "../../Assets/_3_-removebg-preview.png"; // Import your profile image

const Main = () => {
  return (
    <div className="main">
      <section className="main-section" id="about">
        <div className="main-content">
          <div className="title">
            <h3 style={{ display: "inline" }}>I am</h3>{" "}
            <h1 style={{ display: "inline", color: "#ffd170" }}>TAHIR Rida</h1>
          </div>
          <p className="tagline">Passionate Software Engineer</p>
          <button className="contact-btn" style={{ color: "#ffd170" }}>
            Contact Me
          </button>
        </div>
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </section>
    </div>
  );
};

export default Main;
