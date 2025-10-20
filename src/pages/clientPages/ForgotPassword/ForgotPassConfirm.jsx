import React from "react";
import Header from "../../../components/Header";
import ForgotPass from "../../../components/ForgotPass";


const ForgotPassConfirm = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <Header type="simple" title="FORGOT PASSWORD" />
      <ForgotPass type="confirm" />
    </div>
  );
};

export default ForgotPassConfirm;
