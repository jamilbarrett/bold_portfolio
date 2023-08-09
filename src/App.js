import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import Landing from './pages/Landing'
import About from './pages/About'

function App() {
  return (
   <>
   <Header />

   <Landing />


   <Routes>
    <Route path ="/" element = {<Landing/>} />
    <Route path ="/about" element = {<About/>} />

   </Routes>
   
   
   
   
   </>
  );
}

export default App;
