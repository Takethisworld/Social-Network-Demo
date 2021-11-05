import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { requared } from '../Utilits/Validators/Validator';
import { createField, Input } from '../common/FormControl/FormControl';
import {connect} from 'react-redux';
import {loginThunk} from '../redux/authReducer';
import {Redirect} from 'react-router-dom';
import style from '../common/FormControl/FormControl.module.css';

const LoginForm = ({handleSubmit,error}) => {
    return (<form onSubmit={handleSubmit}>
            <label> Sign In </label>
        
            {createField("Email", "email", [requared], Input)}
            {createField("Password", "password", [requared], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
        
        {error && <div  className={style.errorMessage}>
            {error}
        </div>}
        <div>
            <button >Sign In</button>
        </div>
    </form>)
}

const ReduxLogin = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {
    const onSubmit =(formData)=>{
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <ReduxLogin onSubmit={onSubmit}/>
    </div>


}

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth 
})


export default connect (mapStateToProps, {loginThunk})(Login);