import React from 'react';
import users from '../../Assets/Images/users.png'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';
import Pagination from '../../common/Pagination/Pagination';


let User = (user,followInProgress,follow,unfollow) => {
    return (
        <div >
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : users} className={s.ava} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>

                        : <button disabled={followInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)

}

export default User