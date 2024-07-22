import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Contacts from './pages/contacts';
import ContactDetail from './pages/contact-detail';

const App = () => {
  return (
  
   <>
   <h1>Hello, React with Webpack! {process.env.REACT_APP_API_URL}</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contact" element={<ContactDetail />} />
      </Routes>
   
   </>

  )
};

export default App;