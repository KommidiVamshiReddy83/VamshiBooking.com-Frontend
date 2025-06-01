import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import TopPlaces from './components/TopPlaces';
import WeekendDestinations from './components/WeekendDestinations';
import DevicePermission from './components/DevicePermission';

import AdminLogin from './components/AdminLogin';
import Register from './components/Register';
import UserLogin from './components/Userlogin';

const HomePage = () => (
  <>
    <HomeHero />
    <TopPlaces />
    <WeekendDestinations />
  </>
);

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Ask for location only once when the app loads
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setPermissionGranted(true),
        () => setPermissionGranted(false)
      );
    }
  }, []);

  return (
    <Router>
      <div className="App relative">
        <div className={permissionGranted ? '' : 'filter blur-sm pointer-events-none select-none'}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-login" element={<UserLogin />} />
            {/* Add more routes here */}
          </Routes>
        </div>
        {!permissionGranted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <DevicePermission onGranted={() => setPermissionGranted(true)} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;