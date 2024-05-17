import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import AddYourPG from "../Components/AddYourPG";
import HomePage from "../Components/HomePage";
import Booking from "../Components/Booking";
import Login from "../Components/Login";
import ReachUs from "../Components/ReachUs";
import ProfilePage from "../Components/ProfilePage";
import FeedBack from "../Components/FeedBack";
import Signup from "../Components/APIs/SignUp/Signup";
import OTP from "../Components/APIs/OTP/OTP";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><HomePage />
        <Footer />
        </>} />
        <Route path="/signup" element={<><Signup/><Footer /></>} />
        <Route path="/search" element={<><Booking /><Footer /></>} />
        <Route path="/addpg" element={<><AddYourPG /><Footer /></>} />
        <Route path="/login" element={<><Login /><Footer /></>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/aboutus" element={<>
        <AboutUs />
        <Footer />
        </>} />
        <Route path="/FeedBack" element={<FeedBack/>} />
        <Route path="/reachus" element={<>
        <ReachUs />
        <Footer />
        </> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
