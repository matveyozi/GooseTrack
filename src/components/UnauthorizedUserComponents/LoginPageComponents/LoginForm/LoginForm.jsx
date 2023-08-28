import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';


import {
  Container,
  StyledBtn,
  StyledFiLogIn,
  StyledField,
  StyledForm,
  StyledFormTitle,
  StyledLabel,
  StyledTextBtn,
} from './LoginForm.styled';
import { NavLink } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(
         'Email must be valid email'
        )
      .required(
         'Email is a required field'
      ),
    password: yup
      .string()
      .min(
        8,
         'Password must be at least 8 characters'
      )
      .max(
        16,
           'Password must be at most 16 characters'
      )
      .required(
           'Password is a required field'
      ),
  });

  const handleSubmit = (values, actions) => {
    
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };
  return (
    <Container>
      <NavLink to='/'>HOMELINK</NavLink>
      <StyledFormTitle>Log In</StyledFormTitle>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <StyledForm autoComplete="off">
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledField placeholder="Enter email" type="text" name="email" />
          <ErrorMessage name='email'/>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <ErrorMessage name='password'/>
          <StyledField
            placeholder="Enter password"
            type="password"
            name="password"
          />

          <StyledBtn type="submit">
            <StyledTextBtn>Log in</StyledTextBtn>
            <StyledFiLogIn />
          </StyledBtn>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginForm;
