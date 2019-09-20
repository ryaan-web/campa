import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import ManageCampaignContainer from './containers/ManageCampaignContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
          <Hero></Hero>
          <ManageCampaignContainer></ManageCampaignContainer>
      </div>
    </div>
  );
}

export default App;
