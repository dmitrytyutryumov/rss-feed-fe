import * as yup from 'yup'

import { FormValues } from './types'

export const INITIAL_VALUES: FormValues = {
  email: '',
  firstName: '',
  secondName: '',
  password: '',
  passwordConfirmation: '',
}

export const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  firstName: yup.string(),
  secondName: yup.string(),
  password: yup.string().min(6).max(250).required('Required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})
