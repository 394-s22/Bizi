import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Business } from './components/Business';
import businessData from './data/fakedata.json';

function App() {
  return (
    <Business business={businessData}/>
  );
}


export default App;
