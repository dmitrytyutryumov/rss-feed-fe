import { loginEpic, registerEpic, resetPasswordEpic } from 'entities/auth'
import { combineEpics } from 'redux-observable'

export const rootEpic = combineEpics(registerEpic, loginEpic, resetPasswordEpic)
