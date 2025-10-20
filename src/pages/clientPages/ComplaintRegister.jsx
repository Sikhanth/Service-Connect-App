import React from 'react';
import Header from '../../components/Header';
import ComplaintList from '../../components/client/complaintForm/ComplaintList';
import ToolBar from '../../components/ToolBar';

const ComplaintRegister = () => {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
      <Header type="category" title="COMPLAINT" />
      <ComplaintList />
      <ToolBar />
    </div>
  );
};

export default ComplaintRegister;
