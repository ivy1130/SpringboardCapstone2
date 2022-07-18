import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
// import useLocalStorage from './hooks/useLocalStorage';
import { decodeToken } from "react-jwt"
// import './App.css';

import NavBar from './NavBar';
import Routes from './Routes';
// import UserContext from './UserContext';
// import JoblyApi from './api';

function App() {
  return (
    <>
    <NavBar />
    <Routes />
    </>
  );
}

export default App;
