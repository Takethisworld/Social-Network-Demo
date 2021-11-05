import React from 'react';
import logo from './logo.png';
import s from './header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props){
    return<header className ={s.header}>
    <img src={logo} className={s.logo} alt="logo"></img>
    <div className={s.loginBlock}>
      {props.isAuth ? 
      <div>{props.login}- <button onClick={props.logOutThunk}>Log Out</button></div>
      :<NavLink to ={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header;