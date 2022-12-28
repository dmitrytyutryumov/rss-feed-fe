import * as yup from 'yup'

import { FormValues } from './types'

export const INITIAL_VALUES: FormValues = {
  email: '',
}

export const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
})
