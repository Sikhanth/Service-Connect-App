// pages/EReceiptPage.jsx
import React, { useState } from "react";
import Header from "../../components/Header";

import Settings from "../../components/Settings";
import { FaEllipsisV } from "react-icons/fa";
import EReciept from "../../components/EReciept";

const EReceiptPage = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        <Header type="simple" title="E-RECEIPT" />

        {/* Settings (3-dot icon) */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <FaEllipsisV />
        </button>

        {/* Dropdown Box */}
        {showSettings && <Settings />}
      </div>

      {/* Receipt Body */}
      <EReciept />
    </div>
  );
};

export default EReceiptPage;
