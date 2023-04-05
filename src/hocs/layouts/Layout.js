import React, { useContext } from "react";
import Footer from "../../components/navigation/Footer";
import NavBar from "../../components/navigation/Navbar";
import { ThemeContext } from "../../components/Themes/ThemeContext"

const Layout = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{  backgroundColor: theme.backgroundColor }} >
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
