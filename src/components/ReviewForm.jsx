import React, { useState } from "react";
import CourseItem from "./CourseItem";
import { FaCloudDownloadAlt } from "react-icons/fa";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const maxChars = 250;

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col items-center py-6 px-4">
      <div className="w-full max-w-2xl p-6 rounded-2xl shadow-md space-y-6">
        {/* Course Item */}
        <CourseItem />

        {/* Upload Section */}
        <div>
          <label className="font-bold text-gray-800 block mb-2">
            Add Photo (or) Video
          </label>

          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
            <FaCloudDownloadAlt className="text-3xl text-gray-700 mb-2" />
            <button className="text-sm text-blue-600 font-medium hover:underline">
              Click here to upload a File
            </button>
          </div>
        </div>

        {/* Review Text Area */}
        <div>
          <label className="block text-gray-800 font-bold mb-2">
            Write Your Review
          </label>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value.slice(0, maxChars))}
              placeholder="Would you like to write anything about this product..."
              className="w-full h-32 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <div className="flex justify-end text-gray-500 text-xs mt-1">
              {maxChars - review.length} characters remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
