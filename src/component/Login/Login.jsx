import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { requared } from '../Utilits/Validators/Validator';
import { createField, Input } from '../common/FormControl/FormControl';
import {connect} from 'react-redux';
import {loginThunk} from '../redux/authReducer';
import {Redirect} from 'react-router-dom';
import style from '../common/FormControl/FormControl.module.css';

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return (<form onSubmit={handleSubmit}>
            <label> Sign In </label>
        
            {createField("Email", "email", [requared], Input)}
            {createField("Password", "password", [requared], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
        
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image" , "captcha", [requared], Input, {} )}
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
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <ReduxLogin onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>


}

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl 
})


export default connect (mapStateToProps, {loginThunk})(Login);