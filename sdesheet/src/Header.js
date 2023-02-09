import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



function Header() {
  const [{basket,user},dispatch] = useStateValue();
  console.log(user);

  const handleAuth = () =>{
    if(user){
      auth.signOut();
    }
  }
  const username = user?.email.split("@").shift();
  return (
    <div className="header">
      <Link to="/" className = "login__logo1" style={{textDecoration:'none'}}>
        <span>S</span>DE <span>S</span>heet
          
      </Link>

      <div className="header_nav">
        <Link to = {!user && "/login"} style={{ textDecoration: 'none' }}>
          <div className="header_options" onClick={handleAuth}>
            <span className="header_optionLineOne">
              Hello <span className='userName'>{user ? username:'Guest'}</span>
            </span>
            <span className="header_optionLineTwo">
                {user ? 'Sign Out':'Sign In'}
            </span>
          </div>
        </Link>
    </div>

    </div>

    
  )
}

export default Header;