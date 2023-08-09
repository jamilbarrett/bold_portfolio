import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from "./components/Footer";

// pages
import Landing from './pages/Landing'
import About from './pages/About'

function App() {
  return (
   <>

   <Header />

   <Landing />

   <Footer />


   <Routes>
    <Route path ="/" element = {<Landing/>} />
    <Route path ="/about" element = {<About/>} />

   </Routes>
   
   
   
   
   </>
  );
}

export default App;
