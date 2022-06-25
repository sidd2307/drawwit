import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import RectangleDiv from './components/RectangleDiv';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
