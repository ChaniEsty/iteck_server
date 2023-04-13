import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import "./App.css";
function App() {
  return (
   <Router>
     {/*<nav className='main-nav'>
           <NavLink to="/">דף הבית</NavLink>
          <NavLink to="/login">כניסה </NavLink>
          <NavLink to="/register">הרשמה </NavLink>
          <NavLink to="/book/list">ספרים </NavLink> 
        </nav>*/}
    <Routes>
      <Route path="/" element={<Home></Home>}></Route> 
      <Route path="signIn" element={<SignIn></SignIn>}></Route>
      <Route path="signUp" element={<SignUp></SignUp>}></Route>
       <Route path="jobs" element={<Jobs></Jobs>}></Route> 
    </Routes>
   </Router>
  );
}

export default App;
