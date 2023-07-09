import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = (data) => {
    setUserInfo(data);
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
   
    </div>
  );
};

export default App;
