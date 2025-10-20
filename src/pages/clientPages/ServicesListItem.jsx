import React from 'react';
import Header from '../../components/Header';
import ServicesList from '../../components/client/ServicesList';
import ToolBar from '../../components/ToolBar';

const ServicesListItem = () => {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
      <Header type="category" title="SERVICES" />
      <ServicesList />
      <ToolBar />
    </div>
  );
};

export default ServicesListItem;
