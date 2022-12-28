import { AuthPage } from 'pages'
import { LoginForm, RegisterForm, ResetPasswordForm } from 'features'

export const AUTH_PATH = 'auth'
export const LOGIN_PATH = 'login'
export const REGISTER_PATH = 'register'
export const RESET_PASSWORD_PATH = 'reset-password'

export const AUTH_ROUTER = [
  {
    path: AUTH_PATH,
    exact: true,
    element: <AuthPage />,
    children: [
      {
        index: true,
        path: LOGIN_PATH,
        element: <LoginForm />,
      },
      {
        path: REGISTER_PATH,
        element: <RegisterForm />,
      },
      {
        path: RESET_PASSWORD_PATH,
        element: <ResetPasswordForm />,
      },
    ],
  },
]
