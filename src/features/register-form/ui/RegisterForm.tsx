import { Formik, Form, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FormInput, SubmitButton } from 'shared/components'
import { IRegisterFormValues, registerUserAction } from 'entities/auth'

import { INITIAL_VALUES, VALIDATION_SCHEMA } from './constants'
import './styles.scss'

export const RegisterForm = () => {
  const dispatch = useDispatch()
  const submitHandler = async (
    values: IRegisterFormValues,
    { setSubmitting }: FormikHelpers<IRegisterFormValues>
  ) => {
    dispatch(registerUserAction(values))
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={submitHandler}
      validationSchema={VALIDATION_SCHEMA}
    >
      <Form className="register-form">
        <p className="register-form__title">Create an account</p>
        <div className="register-form__redirect-wrapper">
          <p className="register-form__redirect-text">
            Already have an account?
          </p>
          <Link className="register-form__redirect-link" to="../login">
            Log in
          </Link>
        </div>

        <div className="register-form__wrapper">
          <FormInput name="email" type="Email" placeholder="Email" />
          <div className="register-form__pair-field-container">
            <FormInput name="firstName" type="text" placeholder="First Name" />
            <FormInput
              name="secondName"
              type="text"
              placeholder="Second Name"
            />
          </div>
          <FormInput
            name="password"
            type="password"
            placeholder="Type your password"
          />
          <FormInput
            name="passwordConfirmation"
            type="password"
            placeholder="Repeat password"
          />
          <SubmitButton />
        </div>
      </Form>
    </Formik>
  )
}
