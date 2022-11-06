import React from "react";
import WorkSpace from "./WorkSpace";
import {BrowserRouter,Switch,Route, Link} from 'react-router-dom';
import { Component,useState,useRef,useEffect } from "react";

//const LOGIN_URL='/auth'
const Login=()=>
{
    
  const userRef=useRef();
  const errRef=useRef();
  const [user,setUser]=useState('');
const [pwd,setPwd]=useState('');
const [errMsg,setErrMsg]=useState('');
const [success,setSuccess]=useState(false);
   useEffect(()=>{
   userRef.current.focus();},[])
   useEffect(()=>{
    setErrMsg('');
   },[user,pwd])
   const handleSubmit=async (e)=>
   {
    e.preventDefault();
    
    console.log(user,pwd); 

    if(user==12345&&pwd==12345)
    {
      setUser('');
      setPwd('');
      setSuccess(true);
    }
    else{
      setSuccess(false);
      setErrMsg('Invalid login Credentials for admin....');
    }

   
    }
   
   

   
  return(
    <>{success?(
        <section>
       <WorkSpace/>
        </section>
    ):(

   <section>
    <p ref={errRef} className={errMsg?"errmsg":
    "offscreen"} aria-live="assertive">{errMsg}</p>
    <h1>Login In</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="userId">UserId:</label>
       <input type="number" id="userId" ref={userRef} autoComplete="off" 
       onChange={(e)=>setUser(e.target.value)}
       value={user}
       required/>
    <label htmlFor="password">Password:</label>
       <input type="password" id="password"  
       onChange={(e)=>setPwd(e.target.value)}
       value={pwd}
       required/>
       <button>Sign In</button>
    </form>
   </section>)}
   </>
  ); 

  
};
export default Login;