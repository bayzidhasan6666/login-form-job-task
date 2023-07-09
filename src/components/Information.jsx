import React, { useEffect, useState } from 'react';
import './Information.css';

const Information = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedLoginData = localStorage.getItem('loginData');
    if (storedLoginData) {
      const { username, password } = JSON.parse(storedLoginData);
      setUsername(username);
      setPassword(password);
    }
  }, []);

  return (
    <div className="information-container md:w-[500px] mx-auto px-5">
      <h2 className="my-10 font-bold text-2xl">Login Information</h2>
      <div className="neumorphic-card">
        <div className="neumorphic-inner">
          <div className="info-row">
            <label>Username:</label>
            <span className=" w-fit overflow-auto">{username}</span>
          </div>
          <div className="info-row">
            <label>Password:</label>
            <span className="w-fit overflow-auto">{password}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
