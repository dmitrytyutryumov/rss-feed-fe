import * as yup from 'yup'

import { FormValues } from './types'

export const INITIAL_VALUES: FormValues = { email: '', password: '' }

export const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
})
