import React, {useState, useContext} from "react";
import UserContext from "../context/userContext";


export default function Login (){

    const [username,setUserName]=useState("");
    const [userPassword,setPassword]=useState("");
        const {setUser}= useContext(UserContext)
    const handelSubmit=(e)=>{
        e.preventDefault()
        setUser({username, userPassword})
    }

    return (
        <>
        <div>
            <h2>Login</h2>
            <input type="text" name="" id="" value={username}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="username"
            />

            <input type="password" name="" id="" value={userPassword}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="passowrd"/>
            <button onClick={handelSubmit}>submit</button>

        </div>
        
        </>
    )
}