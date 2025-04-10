import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import About from "./components/About";
import Feature from "./components/Feature";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

class Home extends React.Component {
  componentDidMount() {
    console.log('Home component mounted'); // Debug log
  }
  
  render() {
    console.log('Home component rendering'); // Debug log
    return (
      <div>
        <Nav />
        <Login />
        <About />
        <Feature />
        <Booking />
        <Footer />
      </div>
    );
  }
}

export default Home;
