import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import About from "./components/About";
import Feature from "./components/Feature";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Login />
        <About />
        <Feature />
        <Booking />
        <img 
          src="https://pixabay.com/photos/property-house-real-estate-court-7046997/" 
          alt="Real estate"
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
