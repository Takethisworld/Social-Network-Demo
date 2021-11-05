import React from 'react';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseUser,faUserCircle,faEnvelope,
  faMusic,faUserCog,faUsers} from '@fortawesome/free-solid-svg-icons';
import s from './Navbar.module.css';


const Navbar=(props)=>{


    return (<nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/home" activeClassName={s.active}>
        <FontAwesomeIcon className={s.icon} icon={faHouseUser} /></NavLink>
      </div>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.active}>
        <FontAwesomeIcon className={s.icon} icon={faUserCircle} /></NavLink>
      </div>
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.active}>
        <FontAwesomeIcon className={s.icon} icon={faEnvelope} /></NavLink>
      </div >
    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.active}>
        <FontAwesomeIcon icon={faMusic} className={s.icon} /></NavLink>
      </div>
    <div className={s.item}>
      <NavLink to='/setting' activeClassName={s.active}>
        <FontAwesomeIcon icon={faUserCog} className={s.icon} /></NavLink>
      </div>
      <div className={s.item}  >
        <NavLink to='/users' activeClassName={s.active}>
    <FontAwesomeIcon icon={faUsers} className={s.icon} /></NavLink>
    </div>
  </nav>);
}
export default Navbar;
