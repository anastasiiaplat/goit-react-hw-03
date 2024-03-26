import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';


const MAX_LENGTX = 50;
const MIN_LENGTX = 3;


const mailBoxSchema = Yup.object({
  name: Yup.string().required('Name is required').max(MAX_LENGTX, 'Your name must me less then ${MAX_LENGTX}').min(MIN_LENGTX, 'Your name must me longer then ${MIN_LENGTX}'),
  number: Yup.string().required('Number is required').max(MAX_LENGTX, 'Your number must me less then ${MAX_LENGTX}').min(MIN_LENGTX, 'Your number must me longer then ${MIN_LENGTX}'),
  
});


const FORM_INITIAL_VALUES = {
  name: '',
number: '',
}


const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
  onAddUser(values);
  actions.resetForm(); 
};



  return (
    <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={mailBoxSchema}>
    <Form>
      <label>
        <span>Name</span>
          <br />
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage component='p' name='name' />
        <br/>
      </label> {''}
      <label>
        <span>Number</span>
          <br />
          <Field type="tel" name="number" placeholder="+370..." />
          <ErrorMessage component='p' name='number' />
        <br />
      </label> {''}
      <button type="submit">Add contact</button>
      </Form>
      </Formik>
  )
}

export default ContactForm