
import React from "react";
import "./App.css";
import Home from "./components/Home";
import NewArrivals from "./components/NewArrivals";
import Categories from "./components/Categories";
import Collections from "./components/Collections";
import Discover from "./components/Discover";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  const location = useLocation();
  const hideComponentsOnAuthPages = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="main_wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideComponentsOnAuthPages && (
        <>
          <NewArrivals />
          <Categories />
          <Collections />
          <Discover />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

