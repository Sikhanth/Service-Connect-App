// pages/AuthPage.jsx
import React from 'react';
import AppHeader from '../components/AppHeader';
import AuthForm from '../components/AuthForm';
import AuthFooter from '../components/AuthFooter';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col items-center py-6">
      <AppHeader />
      <AuthForm />
      <AuthFooter />
    </div>
  );
};

export default AuthPage;
