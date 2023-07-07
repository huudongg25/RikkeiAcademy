import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", alignItems: "center",justifyContent:'space-between' }}>
        <aside>Navbar</aside>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
