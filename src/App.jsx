import React from 'react';
import Navbar from './components/navBar';
import Hero from './components/hero';
import Projects from './components/project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <footer>
        <p>© {new Date().getFullYear()}Zainab Memon | Built with React</p>
      </footer>
    </div>
  );
}

export default App;