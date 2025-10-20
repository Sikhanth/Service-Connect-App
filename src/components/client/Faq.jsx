// Faq.jsx
import React, { useState } from 'react';

const Faq = ({ headText, fullcontent }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const ToggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="bg-white w-full rounded-[2rem] px-6 py-5 shadow-md flex flex-col space-y-2 transition-all duration-200">
      
      <p className="font-semibold text-lg flex justify-between items-center">
        {headText}
        <button
          onClick={ToggleFullContent}
          className="ml-2 text-gray-500 hover:text-black transition"
        >
          {showFullContent ? '˄' : '˅'}
        </button>
      </p>

      
      {showFullContent && (
        <p className="text-gray-700">{fullcontent}</p>
      )}
    </div>
  );
};

export default Faq;
