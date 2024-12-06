import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import DonorList from "./components/donorlist.jsx";
import DonorForm from "./components/donorform.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donors" element={<DonorList />} />
        <Route path="/register" element={<DonorForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

