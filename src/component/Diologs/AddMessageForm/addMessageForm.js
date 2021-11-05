import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, requared } from '../../Utilits/Validators/Validator';
import { Textarea } from '../../common/FormControl/FormControl';

const maxLenght50 = maxLenghtCreator(50);

 const NewMessageForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name="newMessageText" component={Textarea} placeholder="Write here"
                validate={[requared, maxLenght50]}/>
            </div>
            <button>Send</button>

        </form>
    )
}

export default reduxForm({ form: "dialogMessageForm" })(NewMessageForm);