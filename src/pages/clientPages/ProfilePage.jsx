// pages/ProfilePage.jsx
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#E7E7EB] flex flex-col">
      {/* Header with back icon */}
      <Header
        type="simple"
        title="FILL YOUR PROFILE"
        onLeftClick={() => window.history.back()}
      />

      {/* Page Content */}
      <div className="flex-grow overflow-y-auto">
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfilePage;
