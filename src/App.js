import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ShareButtons from './components/SpeedDial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
        <MainContent />
        <div className="share-buttons-container">
          <ShareButtons />
          sh
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;