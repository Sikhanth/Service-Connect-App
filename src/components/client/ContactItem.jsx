import React from 'react';

const ContactItem = ({ icon: Icon, label }) => (
  <div className="bg-white w-full rounded-[2rem] px-6 py-5 flex flex-col  transition-all duration-200">
    <div className='flex items-center  '>
    <Icon className="text-2xl" />
    <span className='pl-2'>{label}</span>
    </div>
  </div>
);

export default ContactItem;
