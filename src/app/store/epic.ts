import { registerUserEpic } from 'entities/user'
import { combineEpics } from 'redux-observable'

export const rootEpic = combineEpics(registerUserEpic)
