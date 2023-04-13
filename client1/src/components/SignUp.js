import React from "react";
import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [checkPassword,setCheckPassword]=useState("");
    //const checkPassword = document.getElementById("checkPassword").value;
    const signUp = async () => {
        if (!password == checkPassword)
            alert("wrong password")
        const user = JSON.stringify({ email, iduser: "empty", name: firstName + " " + lastName, phone, password })
        debugger;
        const response = await fetch("http://localhost:5000/logIn",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: user
            })
            if(response.ok)
                alert("user added");
            else
                alert("can't add user");
        console.log(response);
    }
    return (
        <div><label>?עדיין לא נרשמת</label><br></br>
            <input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="שם משפחה" />
            <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="שם פרטי" /><br></br>
            <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="טלפון" />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='דוא"ל' /><br></br>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="סיסמא" />
            <input type="password" onChange={(e) => setCheckPassword(e.target.value)} placeholder="אימות סיסמא" /><br></br>
            <button onClick={()=>{signUp("employer")}}>מעסיק</button>
            <button onClick={()=>{signUp("employee")}}>מחפש תעסוקה</button></div>
    )
}

export default SignUp
