import React from "react";
import { Link, Route,Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";

function App() {
  return (
    <> 
    <nav>
      <ul>
        <li>
          {/* without re render entier page */}
          <Link to='/'>Dashboard</Link> 
        </li>
        <li>
          <Link to='/test'>Test</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/test" element={<h1>Test</h1>}/>
    </Routes>
    </>
  );
}

export default App;
