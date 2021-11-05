import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return <div className={s.item}>


    <div className={s.post}>Post 1</div>
    {props.message}
    <img src="https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-928x523.jpg" alt="" />
    <span>Like</span>
    {props.like}
  </div>
}

export default Post;