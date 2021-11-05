import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../component/common/FormControl/FormControl';
import { maxLenghtCreator, requared } from '../../Utilits/Validators/Validator';
import s from './MyPost.module.css';
import Post from './Post/Post';

const maxLenght10 = maxLenghtCreator(10);



const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={s.textarea} component={Textarea} name="newPostText" placeholder="New post"
        validate={[requared, maxLenght10]} />
      <button className={s.add_button}>Add</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm({ form: "newPostArea" })(NewPostForm);

const MyPost = React.memo(props => {

    console.log("RENDER");

    let postElement = props.post.map(p => <Post message={p.message} like={p.likeCounter} />);

    let newPost = (value) => {
      props.addPost(value.newPostForm);
    };

    return <div>
      <NewPostReduxForm onSubmit={newPost} />
      <div className={s.posts}>
        {postElement}
      </div>
    </div>;
  });

export default MyPost;