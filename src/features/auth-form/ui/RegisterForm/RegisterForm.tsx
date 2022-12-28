import { Formik, Form, FormikHelpers } from 'formik'

import { FormInput } from 'shared/components'

type FormValues = {
  email: string
  password: string
}

export const RegisterForm = () => {
  const initialValues: FormValues = { email: '', password: '' }
  const submitHandler = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log({ values })
    setSubmitting(false)
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <FormInput name="email" type="Email" placeholder="Type your email" />
          <FormInput
            name="password"
            type="password"
            placeholder="Type your password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
