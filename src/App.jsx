import React, { useState } from 'react';
import Login from './components/Login';
import Information from './components/Information';
import Navbar from './components/Navbar';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = (data) => {
    setUserInfo(data);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Login onLogin={handleLogin} />
      {userInfo && (
        <Information
          username={userInfo.username}
          password={userInfo.password}
        />
      )}
    </div>
  );
};

export default App;
