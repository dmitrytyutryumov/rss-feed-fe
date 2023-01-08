export interface IUser {
  email: string
  userName: string
  logo?: string
}

export interface IAuthState {
  accessToken: string | null
  refreshToken: string | null
  user: IUser | null

  error: string
  inProgress: boolean
}

export interface ISuccessActionPayload {
  accessToken?: string | null
  refreshToken?: string | null
  user?: IUser | null
}

export interface IFailureActionPayload {
  error: string
}

export interface IRegisterFormValues {
  email: string
  firstName: string
  secondName: string
  password: string
  passwordConfirmation?: string
}

export interface ILoginFormValues {
  email: string
  password: string
}
