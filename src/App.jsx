import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './Sucess';
import Search  from './Search';
import LoginForm from './LoginForm'
import Store from './store'
import { MantineProvider } from '@mantine/core';
import Display from './display';
import Dash from './dash';
import Demos from './Demos';
import Dis from './Dis';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
    <div>
      <MantineProvider>
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Success />} />
        <Route path="/Search" element={<Search/>}/>
       
        <Route path="/display" element={<Display/>}/> 
        <Route path="/dash" element={<Dash/>}/> 
        <Route path="/table" element={<Demos/>}/> 

        <Route path="/dis" element={<Dis/>}/> 
      </Routes>
    </Router>
    </MantineProvider>

    </div>
    </>
    
  );
};

export default App;