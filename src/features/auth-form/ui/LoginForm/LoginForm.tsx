import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { FormInput } from 'shared/components'
import { FormValues } from './types'

import './styles.scss'

const INITIAL_VALUES = { email: '', password: '' }

const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
})

export const LoginForm = () => {
  const submitHandler = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log({ values })
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={submitHandler}
      validationSchema={VALIDATION_SCHEMA}
    >
      <Form className="login-form">
        <p className="login-form__title">Login</p>
        <div className="login-form__wrapper">
          <FormInput name="email" type="Email" placeholder="Type your email" />
          <FormInput
            name="password"
            type="password"
            placeholder="Type your password"
          />
          <a className="login-form__reset-password" data-to="reset-password">
            Forgot your password?
          </a>
          <button className="login-form__btn" type="submit">
            Submit
          </button>
        </div>
        <div className="login-form__redirect-wrapper">
          <p className="login-form__redirect-text">
            Don&rsquo;t have an account?
          </p>
          <a className="login-form__redirect-link" data-to="register">
            Create one
          </a>
        </div>
      </Form>
    </Formik>
  )
}
