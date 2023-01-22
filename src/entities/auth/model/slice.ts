import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

import * as actions from './actions'
import { getAccessToken, getRefreshToken } from 'shared/storage'
import {
  IAuthState,
  IFailureActionPayload,
  ISuccessActionPayload,
} from './types'

const initialState: IAuthState = {
  accessToken: getAccessToken(),
  refreshToken: getRefreshToken(),
  user: null,
  error: '',
  inProgress: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) => {
    builder
      .addCase(actions.registerUserAction, (state: IAuthState) => ({
        ...state,
        inProgress: true,
      }))
      .addCase(actions.loginUserAction, (state: IAuthState) => ({
        ...state,
        inProgress: true,
      }))
      .addCase(
        actions.successAction,
        (state: IAuthState, action: PayloadAction<ISuccessActionPayload>) => ({
          ...state,
          inProgress: false,
          error: '',
          ...action.payload,
        })
      )
      .addCase(
        actions.failureAction,
        (state: IAuthState, action: PayloadAction<IFailureActionPayload>) => ({
          ...state,
          inProgress: false,
          error: action.payload.error,
        })
      )
  },
})

export const userReducer = authSlice.reducer
