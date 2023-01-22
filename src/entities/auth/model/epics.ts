import { PayloadAction } from '@reduxjs/toolkit'
import { ofType } from 'redux-observable'
import { catchError, from, map, retry, switchMap, takeUntil } from 'rxjs'
import { AjaxError } from 'rxjs/ajax'
import {
  ApiClient,
  loginEndpoint,
  resetPasswordEndpoint,
  signUpEndpoint,
} from 'shared'

import { saveAuthTokens } from 'shared/storage'

import { failureAction, successAction } from './actions'
import {
  REGISTER_USER_ACTION_TYPE,
  CANCEL_AUTH_ACTION,
  LOGIN_USER_ACTION_TYPE,
  RESET_PASSWORD_ACTION_TYPE,
} from './constants'

export const registerEpic = (action$: any) =>
  action$.pipe(
    ofType(REGISTER_USER_ACTION_TYPE),
    switchMap((action: PayloadAction) =>
      from(ApiClient.post(signUpEndpoint, action.payload)).pipe(
        map((response: any) => {
          saveAuthTokens(
            response.response.accessToken,
            response.response.refreshToken
          )
          return successAction(response.data)
        }),
        retry(1),
        catchError(async (error: AjaxError) =>
          failureAction({ error: error.message })
        ),
        takeUntil(action$.pipe(ofType(CANCEL_AUTH_ACTION)))
      )
    )
  )

export const loginEpic = (action$: any) =>
  action$.pipe(
    ofType(LOGIN_USER_ACTION_TYPE),
    switchMap((action: PayloadAction) =>
      from(ApiClient.post(loginEndpoint, action.payload)).pipe(
        map((response: any) => {
          saveAuthTokens(
            response.response.accessToken,
            response.response.refreshToken
          )
          return successAction(response.data)
        }),
        retry(1),
        catchError(async (error: AjaxError) =>
          failureAction({ error: error.message })
        ),
        takeUntil(action$.pipe(ofType(CANCEL_AUTH_ACTION)))
      )
    )
  )

export const resetPasswordEpic = (action$: any) =>
  action$.pipe(
    ofType(RESET_PASSWORD_ACTION_TYPE),
    switchMap((action: PayloadAction) =>
      from(ApiClient.post(resetPasswordEndpoint, action.payload)).pipe(
        map(() => successAction({})),
        retry(1),
        catchError(async (error: AjaxError) =>
          failureAction({ error: error.message })
        ),
        takeUntil(action$.pipe(ofType(CANCEL_AUTH_ACTION)))
      )
    )
  )
