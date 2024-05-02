import React from "react";
import "./profile.css";
export default function Profile() {
  return (
    <div className="container-profile container">
      <h1>My Profile</h1>
      <div className="profile-info">
        <div className="profile-picture">
          <img src="profile-picture.png" alt="Profile " />
        </div>
        <div className="profile-name">John Doe</div>
        <div className="profile-details">
          <p>Email: john@example.com</p>
          <p>Location: New York, USA</p>
          <p>Interests: Web Development, Traveling, Photography</p>
        </div>
      </div>
    </div>
  );
}
