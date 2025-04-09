import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { initializeAnimations } from './animations';
import ShareButtons from './components/ShareButtons';

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
  <MainContent />
  <div className="share-buttons-container"><ShareButtons /></div>
</main>
      <Footer />
    </div>
  );
}

export default App;