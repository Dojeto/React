import React from "react";
import { Link, Route,Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
import Test from "./Components/Test.js";
import TOest from "./Components/OutLet.js";

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
      <Route path="/test" element={<TOest/>}>
        <Route index element={<h1>Lmao</h1>}/>
        <Route path=":id" element={<Test/>}/> {/*nested routes */}
      </Route>
      {/* <Route path="/test/:id" element={<Dashboard/>}/> */}
      <Route path="*" element={<h1>Not found</h1>}/>
    </Routes>
    </>
  );
}

export default App;
