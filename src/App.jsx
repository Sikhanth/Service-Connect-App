import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<AuthPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/home" element={<HomePage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
