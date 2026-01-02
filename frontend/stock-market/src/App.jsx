import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import NewsReport from "./NewsReport";


import "./App.css";

function App() {
  const [page, setPage] = useState("login");
const [userEmail, setUserEmail] = useState('');
  return (
    <>
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "home" && <Home />}

      {/* React Router */}
      <Routes>
        <Route path="/news" element={<NewsReport />} />
      </Routes>
    </>
  );
}

export default App;
