import { Formik, Form, FormikHelpers } from 'formik'

import { FormInput, SubmitButton } from 'shared/components'
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './constants'
import { FormValues } from './types'

import './styles.scss'

export const ResetPasswordForm = () => {
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
      <Form className="reset-password-form">
        <p className="reset-password-form__title">Enter your email</p>
        <p className="reset-password-form__tip">
          We will send you instructions to reset your password.
        </p>
        <div className="reset-password-form__wrapper">
          <FormInput name="email" type="Email" placeholder="Type your email" />
          <SubmitButton />
        </div>
      </Form>
    </Formik>
  )
}
