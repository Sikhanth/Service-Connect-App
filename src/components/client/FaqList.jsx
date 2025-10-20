// FaqList.jsx
import React, { useState } from 'react';
import Faq from './Faq';

const FaqList = () => {
  const CommonQuestions = {
    General: [
      {
        headText: "How do I manage my Notifications?",
        fullContent:
          "You can manage your notifications by going to your account settings. From there, you can choose which alerts you want to receive — such as updates, offers, or reminders — and turn off the ones you don’t need."
      },
      {
        headText: "Is my personal information secure?",
        fullContent:
          "Yes, we use advanced encryption and secure servers to keep your personal data safe and private."
      }
    ],
    Account: [
      {
        headText: "How do I reset my password?",
        fullContent:
          "Go to the login page and click ‘Forgot Password’. You’ll receive an email with a link to reset your password safely."
      }
    ],
    Payment: [
      {
        headText: "Can I cancel my subscription anytime?",
        fullContent:
          "Yes, you can cancel your subscription at any time from your account settings without any hidden charges."
      }
    ],
    Services: [
      {
        headText: "Can I cancel my subscription anytime?",
        fullContent:
          "Yes, you can cancel your subscription at any time from your account settings without any hidden charges."
      }
    ]
  };

  const [FaqCategory, setFaqCategory] = useState("General");
  const categoriesAvailable = CommonQuestions[FaqCategory];

  return (
    <div className="min-h-screen bg-[#D9D9DB] px-6 py-8 flex flex-col items-center">
      {/* Category Buttons */}
      <div className="w-full overflow-x-auto mb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex space-x-3 w-max px-2">
          {Object.keys(CommonQuestions).map((category) => (
            <button
              key={category}
              onClick={() => setFaqCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap transition-all duration-200
                ${
                  FaqCategory === category
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-black border border-gray-700 hover:bg-black hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Line by line FAQ Items */}
      <div className="w-full max-w-4xl flex flex-col space-y-4">
        {categoriesAvailable.map((r, index) => (
          <Faq
            key={index}
            headText={r.headText}
            fullcontent={r.fullContent}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
