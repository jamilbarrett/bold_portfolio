import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from "./components/Footer";

// pages
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'


function App() {
  return (
    <>

      <Header />

      <Footer />


      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />


      </Routes>




    </>
  );
}

export default App;
