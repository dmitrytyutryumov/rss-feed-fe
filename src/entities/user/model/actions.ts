import { createAction } from '@reduxjs/toolkit'

import { IFailureActionPayload, ISuccessActionPayload } from './types'

export const requestAction = createAction('user-request')
export const successAction = createAction<ISuccessActionPayload>('user-success')
export const failureAction = createAction<IFailureActionPayload>('user-failure')

export const REGISTER_USER_ACTION_TYPE = 'register-user'
export const registerUserAction = createAction<any>(REGISTER_USER_ACTION_TYPE)

export const CANCEL_REGISTER_ACTION_TYPE = 'cancel-regiser-user'
export const cancelRegisterUserAction = createAction(
  CANCEL_REGISTER_ACTION_TYPE
)
