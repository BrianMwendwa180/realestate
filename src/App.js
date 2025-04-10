import React, { useMemo, useState } from "react";
import "./App.css";
import Home from "./HomePage";
import PropertyDetail from "./PropertyDetail";
import UserContext from "./components/service/UserContext";
import Booking from "./components/Booking";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log('App component rendering'); // Debug log
  const [user, setNewUser] = useState(null);
  const providerValue = useMemo(
    () => ({ user, setNewUser }),
    [user, setNewUser]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
