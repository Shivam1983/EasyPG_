import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import AddYourPG from "../Components/AddYourPG";
import HomePage from "../Components/HomePage";
import Booking from "../Components/Booking";
import Login from "../Components/Login";
import ReachUs from "../Components/ReachUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <HomePage />
        <Footer />
        </>} />
        <Route path="/signup" element={<HomePage />} />
        <Route path="/search" element={<Booking />} />
        <Route path="/addpg" element={<AddYourPG />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<>
        <AboutUs />
        <Footer />
        </>} />
        <Route path="/reachus" element={<>
        <ReachUs />
        <Footer />
        </> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
