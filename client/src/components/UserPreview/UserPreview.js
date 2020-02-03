import React, { Component } from "react";
import { Link } from "react-router-dom";
const UserPreview = props => {
  const { username, birthDate, _id } = props.user;
  return (
    <div>
      
      <h1>{username}</h1>
      <p>{birthDate}</p>
      <Link to={`/${_id}`}>View details</Link>
   
    </div>
  );
};

export default UserPreview;
