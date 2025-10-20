import React from 'react'
import { FaInstagram, FaWhatsapp, FaTwitter, FaHeadset, FaFacebook } from 'react-icons/fa'
import ContactItem from './ContactItem'

const Contact = () => {
  const ContactModels = [
    { id: "1", icon: FaHeadset, label: "Customer Services" },
    { id: "2", icon: FaWhatsapp, label: "WhatsApp" },
    { id: "3", icon: FaFacebook, label: "Facebook" },
    { id: "4", icon: FaTwitter, label: "Twitter" },
    { id: "5", icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] px-6 py-8 flex flex-col items-center space-y-3">
      {ContactModels.map((r) => (
        <ContactItem key={r.id} icon={r.icon} label={r.label} />
      ))}
    </div>
  );
};

export default Contact;
