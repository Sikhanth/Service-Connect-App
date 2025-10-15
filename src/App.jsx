import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/clientPages/AuthPage";
import ForgotPasswordPage from "./pages/clientPages/ForgotPassword/ForgotPasswordPage";
import ServiceDetails from "./pages/clientPages/ServiceDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<ServiceDetails />} />
        <Route path="/forgotpass" element={<ForgotPasswordPage />} /> 


      </Routes>
    </BrowserRouter>
  );
}

export default App;
