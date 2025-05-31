import React from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import TopPlaces from './components/TopPlaces';
import WeekendDestinations from './components/WeekendDestinations';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeHero />
      <TopPlaces />
      <WeekendDestinations />
      {/* Add more sections below */}
    </div>
  );
};

export default App;