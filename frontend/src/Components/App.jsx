import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Portfolio from './Portfolio.jsx';




function App() {
  const [page, setPage] = useState('login');

  return (
    <>
      {page === 'signup' && (
        <Signup navigateToLogin={() => setPage('login')} />
      )}

      {page === 'login' && (
        <Login
          navigateToHome={() => setPage('home')}
          navigateToSignup={() => setPage('signup')}
        />
      )}

      {page === 'home' && (
        <>
            <Portfolio navigateToLogin={() => setPage("login")} />
        </>
      )}
    </>
  );
}

export default App;
