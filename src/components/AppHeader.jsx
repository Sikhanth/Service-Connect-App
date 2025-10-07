import React from 'react';
import logo from '../assets/serviceconnect.png';

const AppHeader = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <img src={logo} alt="Service Connect Logo" className="w-[150px] h-auto mb-4" />

    </div>
  );
};

export default AppHeader;