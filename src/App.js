import React from "react";
import "./App.css";
import Signup from "./components/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
