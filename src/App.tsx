import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./pages/contact-detail";
import Contacts from "./pages/contacts";

const App = () => {
  return (
    <>
      <Routes>
        <Route   path="/" element={<Contacts />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
      </Routes>

      
    </>
  );
};

export default App;
