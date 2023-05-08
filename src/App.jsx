import React from 'react';
import { useState } from 'react';
import Navbar from './routes/navbar/navbar';
import Addinfo from './components/addInformation/addinfo';
import ShowingInfo from './components/showingInfo/showingInfo';

const App = () => {
  return (
    <div>
      <Navbar />
      <ShowingInfo />
    </div>
  );
}

export default App;
