import React from 'react';
import style from './FormControl.module.css';
import { Field } from 'redux-form';


export const FormControl = ({ input, meta:{touched,error},children  }) => {

    const showError = touched && error;

    return (<div className={style.formControl + " " + (showError ? style.error : "")}>
        <div>
            {children}
        </div>
        {showError && <span>{error}</span>}
    </div>)
}

export const Textarea = (props) => {
    const { input, meta, ...Restprops } = props
    return <FormControl {...props} ><textarea {...input} {...Restprops} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...Restprops } = props
    return <FormControl {...props} ><input {...input} {...Restprops} /> </FormControl>

}

export const createField = (placeholder, name, validators, component, props ={}, text ="") =>
(
    <div>
        <Field
            name={name}
            component={component}
            validate={validators}
            placeholder={placeholder}
            {...props} />{text}
    </div>
)