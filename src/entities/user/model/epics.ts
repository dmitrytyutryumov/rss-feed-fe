import { PayloadAction } from '@reduxjs/toolkit'
import { ofType } from 'redux-observable'
import { catchError, map, mergeMap, takeUntil } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'

import {
  CANCEL_REGISTER_ACTION_TYPE,
  failureAction,
  REGISTER_USER_ACTION_TYPE,
  successAction,
} from './actions'
import { saveAccessToken, saveRefreshToken } from './storage'

export const registerUserEpic = (action$: any) =>
  action$.pipe(
    ofType(REGISTER_USER_ACTION_TYPE),
    mergeMap((action: PayloadAction) =>
      ajax({
        url: 'http://localhost:3100/api/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'rxjs-custom-header': 'Rxjs',
        },
        body: action.payload,
      }).pipe(
        map((response: any) => {
          console.log(response)
          saveAccessToken(response.response.accessToken)
          saveRefreshToken(response.response.refreshToken)
          return successAction(response.data)
        }),
        catchError(async (error: AjaxError) =>
          failureAction({ error: error.message })
        ),
        takeUntil(action$.pipe(ofType(CANCEL_REGISTER_ACTION_TYPE)))
      )
    )
  )
