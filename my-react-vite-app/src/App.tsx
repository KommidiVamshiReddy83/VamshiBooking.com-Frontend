import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import TopPlaces from './components/TopPlaces';
import WeekendDestinations from './components/WeekendDestinations';
import DevicePermission from './components/DevicePermission';

const App: React.FC = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  return (
    <div className="App relative">
      <div className={permissionGranted ? '' : 'filter blur-sm pointer-events-none select-none'}>
        <Navbar />
        <HomeHero />
        <TopPlaces />
        <WeekendDestinations />
      </div>
      {!permissionGranted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <DevicePermission onGranted={() => setPermissionGranted(true)} />
        </div>
      )}
    </div>
  );
};

export default App;