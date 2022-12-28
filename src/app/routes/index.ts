import { createBrowserRouter } from 'react-router-dom'
import { AUTH_ROUTER } from './auth'

export const router = createBrowserRouter([
  {
    path: '/',
  },
  ...AUTH_ROUTER,
])
