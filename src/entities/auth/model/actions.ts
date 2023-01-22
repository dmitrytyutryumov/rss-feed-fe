import { createAction } from '@reduxjs/toolkit'
import {
  CANCEL_AUTH_ACTION,
  LOGIN_USER_ACTION_TYPE,
  REGISTER_USER_ACTION_TYPE,
  RESET_PASSWORD_ACTION_TYPE,
} from './constants'
import { IFailureActionPayload, ISuccessActionPayload } from './types'

export const successAction = createAction<ISuccessActionPayload>('user-success')
export const failureAction = createAction<IFailureActionPayload>('user-failure')

export const registerUserAction = createAction<any>(REGISTER_USER_ACTION_TYPE)
export const loginUserAction = createAction<any>(LOGIN_USER_ACTION_TYPE)
export const resetPasswordAction = createAction(RESET_PASSWORD_ACTION_TYPE)

export const cancelAuthAction = createAction(CANCEL_AUTH_ACTION)
