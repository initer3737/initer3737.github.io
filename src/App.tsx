import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';
import { HashRouter } from 'react-router-dom';
const App=()=><HashRouter basename={`/${process.env.PUBLIC_URL}`}><Routes/></HashRouter>
export default App;