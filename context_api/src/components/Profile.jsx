import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <>
        <div>
          <h3>Please Login</h3>
        </div>
      </>
    );
  return (
    <>
      <div>
        <h3>Welcome {user.username}</h3>
      </div>
    </>
  );
};
export default Profile;
