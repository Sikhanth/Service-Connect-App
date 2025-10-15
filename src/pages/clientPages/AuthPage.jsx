// pages/AuthPage.jsx
import React from 'react';

import AuthForm from '../../components/client/LoginComponents/AuthForm';
import AuthFooter from '../../components/client/LoginComponents/AuthFooter';
import AppHeader from '../../components/client/LoginComponents/AppHeader';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col items-center py-6">
      <AppHeader />
      <AuthForm/>
      <AuthFooter />
    </div>
  );
};

export default AuthPage;