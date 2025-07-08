import React, { useState } from "react";
import useUserContext from "../context/context";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser, setPass} = useUserContext();

    const submitButton = (e) => {
        e.preventDefault()
        console.log(username);
        console.log(password);
        
        setUser(username)
        setPass(password)
    }

    return (
        <>
         <h4>LOGIN</h4>
         <label htmlFor="username"><p>ENTER USERNAME</p></label>
         <input type="text" 
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         placeholder="username"
         />
         <br />
         <label htmlFor="password"><p>ENTER PASSWORD</p></label>
         <input type="text" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="password"
         />
         <br />
         <button onClick={submitButton}>click</button>
        </>
    )
}