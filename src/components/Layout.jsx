import React from "react";
import "./css/Layout.css";

// Importing all created components
import Footer from "./Footer";
import Navbar from "./Navbar";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div className="Layout">
      {/* Attaching all file components */}
      <Navbar />
      {children}
      <Footer /> {/* Attach if necessary */}
    </div>
  );
}