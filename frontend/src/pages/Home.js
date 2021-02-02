import React, { useState, useEffect } from 'react';
import login from '../services/login';

function Home() {
  const [user, setUser] = useState('');

  function callback(data) {
    setUser(data);
  }

  useEffect(
    () => {
        login(callback);
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        사용자는 {user}입니다.
      </header>
    </div>
  );
}

export default Home;