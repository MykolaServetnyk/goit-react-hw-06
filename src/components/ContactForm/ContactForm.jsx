import css from './ContactForm.module.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import { addContact } from '../../redux/store';
import { useDispatch } from 'react-redux';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required"),
});

export default function ContactForm() {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
    const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number
    }; 
    dispatch(addContact(newContact));
    actions.resetForm();
}

    
    return (
        <Formik initialValues={{
            name: '',
            number: ''
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.field}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field name="name" />
                    <ErrorMessage className={css.error} name="name" component="div" />
                </div>
                <div className={css.field}>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field name="number" />
                    <ErrorMessage className={css.error} name="number" component="div" />
                </div>
                <button className={css.submitBtn} type="submit">Add contact</button>
            </Form>    
        </Formik>
    );
}
