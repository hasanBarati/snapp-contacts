import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./pages/contact-detail";
import Contacts from "./pages/contacts";

const App = () => {
  return (
    <>
      {/* <h1>Hello, React with Webpack! {process.env.REACT_APP_API_URL}</h1> */}
      <Routes>
        <Route  path="/" element={<Contacts />} />
        <Route path="/contact" element={<ContactDetail />} />
      </Routes>
    </>
  );
};

export default App;
