import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/clientPages/HomePage"; // 1
import LoginPage from "./pages/clientPages/LoginPage";// 2
import AuthPage from "./pages/clientPages/AuthPage"; //3
import OtpPage from "./pages/clientPages/OtpPage"; //4
import Location from "./components/Location";
import ProfilePage from "./pages/clientPages/ProfilePage";//5
import AlertModal from "./components/AlertModal";
import ForgotPasswordPage from "./pages/clientPages/ForgotPassword/ForgotPasswordPage";
import ForgotPassVerify from "./pages/clientPages/ForgotPassword/ForgotPassVerify";
import ForgotPassConfirm from "./pages/clientPages/ForgotPassword/ForgotPassConfirm";
import AllCategoryPage from "./pages/clientPages/AllCategoryPage";
import SubCategoryPage from "./pages/clientPages/SubCategoryPage";
import FilterPage from "./pages/clientPages/FilterPage";
import CakeDeliveryPage from "./pages/clientPages/CakeDeliveryPage";
import RecentSearchPage from "./pages/clientPages/RecentSearchPage";
import ServiceProfilePage from "./pages/clientPages/ServiceProfilePage";
import ServiceRequestPage from "./pages/clientPages/ServiceRequestPage";
import Bookings from "./pages/clientPages/Bookings/Bookings";
import BookingDetailsPage from "./pages/clientPages/Bookings/BookingDetailsPage";
import PaymentSelectionPage from "./pages/clientPages/PaymentSelectionPage";
import AddNewCardPage from "./pages/clientPages/AddNewCardPage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<AuthPage/>} />
        <Route path="/otp" element={<OtpPage/>} />
        <Route path="/loc" element={<Location/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/alert" element={<AlertModal/>} />
        <Route path="/fgtpform" element={<ForgotPasswordPage/>} />
        <Route path="/fgtpverify" element={<ForgotPassVerify/>} />
        <Route path="/fgtpconfirm" element={<ForgotPassConfirm/>} />
        <Route path="/all-categories" element={<AllCategoryPage/>} />
        <Route path="/sub-categories" element={<SubCategoryPage/>} />
        <Route path="/sub-categories" element={<SubCategoryPage/>} />
        <Route path="/sub-categories" element={<SubCategoryPage/>} />
        <Route path="/recent" element={<RecentSearchPage/>} />
        <Route path="/cake" element={<CakeDeliveryPage/>} />
        <Route path="/filter" element={<FilterPage/>} />
        <Route path="/service-profile" element={<ServiceProfilePage/>} />
        <Route path="/service-request" element={<ServiceRequestPage/>} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/bookdetails" element={<BookingDetailsPage/>} />
        <Route path="/payment" element={<PaymentSelectionPage/>} />
        <Route path="/addcard" element={<AddNewCardPage/>} />



        


        

        
        
        




      </Routes>
    </BrowserRouter>
  );
}

export default App;
