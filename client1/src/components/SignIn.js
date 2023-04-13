import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom"
import SignUp from "./SignUp";

const SignIn = () => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const signIn = async () => {
        const user = JSON.stringify({ signInEmail, signInPassword });
        alert("checking");
        const response = await fetch("http://localhost:5000/logIn/signIn",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: user
            })
        alert("checking");
        debugger;
        if (response.ok) {
            const acssesToken = await response.json();
            alert("logged in");
            sessionStorage.setItem("user", acssesToken);
            alert(acssesToken);
        }
        else
            alert("not found");
    }

    const newPassword = async () => {
        const response = await fetch("http://localhost:5000/logIn",
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                query: JSON.stringify({ signInEmail })
            })
        if (response.ok)
            alert("logged in");
        else
            alert("not found");
    }
    
    return (
        <div class="overlay">
            {/* <!-- LOGN IN FORM by Omar Dsoky -->*/}
            <form>
                {/* <!--   con = Container  for items in the form--> */}
                <div class="con">
                    {/* <!--     Start  header Content  --> */}
                    <header class="head-form">
                        <h2>Log In</h2>
                        {/* <!--     A welcome message or an explanation of the login form --> */}
                        <p>login here using your username and password</p>
                    </header>
                    {/* <!--     End  header Content  --> */}
                    <br></br>
                    <div class="field-set">
                        {/* <!--   user name --> */}
                        <span class="input-item">
                            <i class="fa fa-user-circle"></i>
                        </span>
                        {/* <!--   user name Input--> */}
                        <input class="form-input" id="txt-input" type="text" placeholder="@UserName" onChange={(e) => setSignInEmail(e.target.value)} ></input>
                        <br></br>
                        {/* <!--   Password --> */}
                        <span class="input-item">
                            <i class="fa fa-key"></i>
                        </span>
                        {/* <!--   Password Input--> */}
                        <input class="form-input" type="password" placeholder="Password" id="pwd" name="password" onChange={(e) => setSignInPassword(e.target.value)}></input>

                        {/* <!--      Show/hide password  --> */}
                        {/* <span>
                            <i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                        </span> */}
                        <br></br>
                        {/* <!--        buttons --> */}
                        {/* <!--      button LogIn --> */}
                        <button class="log-in" onClick={signIn}> Log In </button>
                    </div>
                    {/* <!--   other buttons --> */}
                    <div class="other">
                        {/* <!--      Forgot Password button--> */}
                        <button class="btn submits frgt-pass" onClick={newPassword}>Forgot Password</button>
                        {/* <!--     Sign Up button --> */}
                        <NavLink class="btn submits sign-up" to="/signUp">Sign Up <i class="fa fa-user-plus" aria-hidden="true"></i></NavLink>
                        {/* <button class="btn submits sign-up" onClick={signUp}>Sign Up
                            <!--         Sign Up font icon -->
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;


