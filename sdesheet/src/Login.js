import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from "react-router-dom";
import { auth,db } from './firebase';
import { useStateValue } from './StateProvider';

import QuestionData, { version } from "./BABBAR450.js";
import QuestionData1, { version1 } from "./StriverList";

import AmazonList from "./AmazonList";

import GoogleList from './GoogleList';
import MicrosoftList from './MicrosoftList';



function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [{user},dispatch] = useStateValue();

    const signIn = e =>{
        e.preventDefault();

        //firebase login
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push('/');
        })
        .catch(error => alert(error.message,"guiv"));
    }

    const register = e =>{
        e.preventDefault();

        //firebase register
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log("sahsaj",auth);
            if(auth){
                
                console.log("u id",auth.user.uid);
                db.collection("users")
                .doc(auth.user.uid)
                .set({
                    babbarList: QuestionData,
                    striverList: QuestionData1,
                    amazonList: AmazonList,
                    googleList: GoogleList,
                    microsoftList: MicrosoftList
                })
                history.push('/');
            }
        })
        .catch(error => alert(error.message,"guiv"));
    }


  return (
    <div className='login'>
        <Link to = "/" className = "login__logo" style={{textDecoration:'none'}}>
        <span>S</span>DE <span>S</span>heet
            
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                    {e=> setEmail(e.target.value)}
                ></input>

                <h5>Password</h5>
                <input type='password' value={password} onChange={
                    e=> setPassword(e.target.value)
                }></input>
                <button type ='submit' onClick={signIn} className='login__button'>Log in</button>
            </form>

            <p>If you are a new User than Create an Account.</p>
            <button onClick={register} className='signin__button'>Create an Account</button>
            
        </div>
    </div>
  )
}

export default Login