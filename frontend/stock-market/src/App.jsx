import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NewsReport from "./components/NewsReport";
import About from "./components/about";
import Market from "./components/Market";
import LiveTrading from "./components/LiveTrading";
import TrackNow from "./components/TrackNow";
import Gpt from "./components/Gpt";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <Routes>
      {/* 🔓 PUBLIC ROUTES */}
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
          )
        }
      />

      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
      />

      {/* 🔒 PROTECTED ROUTES */}
      <Route
        path="/"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/about"
        element={
          isLoggedIn ? (
            <About userEmail={userEmail} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/market"
        element={isLoggedIn ? <Market /> : <Navigate to="/login" />}
      />

      <Route
        path="/livetrading"
        element={isLoggedIn ? <LiveTrading /> : <Navigate to="/login" />}
      />

      <Route
        path="/tracknow"
        element={isLoggedIn ? <TrackNow /> : <Navigate to="/login" />}
      />

      <Route
        path="/news"
        element={isLoggedIn ? <NewsReport /> : <Navigate to="/login" />}
      />

       <Route
        path="/gpt"
        element={isLoggedIn ? <NewsReport /> : <Navigate to="/login" />}
      />

      

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>




  );
}

export default App;
