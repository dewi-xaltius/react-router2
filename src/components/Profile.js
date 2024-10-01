import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();  // Get the username from the URL

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Profile;
