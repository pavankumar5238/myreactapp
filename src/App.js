import React, { useState, useEffect } from 'react';
import Email from './components/email/email'

const App = () => {
  const [location, setLocation] = useState(null);

  let getLocation = () => {
    console.log('button clicked')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }; // The empty dependency array ensures that the effect runs once after the initial render

  return (
    <div>

      <Email></Email>
      {/* <button onClick={() => getLocation()}>Get location</button>
      {location ? (
        <p>
          Your current location is: {location && location.latitude}, {location && location.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )} */}
    </div>
  );
};

export default App;
