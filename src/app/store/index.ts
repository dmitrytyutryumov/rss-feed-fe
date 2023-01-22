import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'

import { userReducer } from 'entities/auth'

import { rootEpic } from './epic'

const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
  reducer: { userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
})

epicMiddleware.run(rootEpic)
