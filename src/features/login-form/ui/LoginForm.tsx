import { Formik, Form, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'

import { FormInput, SubmitButton } from 'shared/components'
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './constants'
import { FormValues } from './types'

import './styles.scss'

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
          <Link className="login-form__reset-password" to="../reset-password">
            Forgot your password?
          </Link>
          <SubmitButton />
        </div>
        <div className="login-form__redirect-wrapper">
          <p className="login-form__redirect-text">
            Don&rsquo;t have an account?
          </p>
          <Link className="login-form__redirect-link" to="../register">
            Create one
          </Link>
        </div>
      </Form>
    </Formik>
  )
}
