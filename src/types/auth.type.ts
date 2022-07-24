import { UserData } from './user.type'

export interface SignIn {
  sucess: number
  data: {
    isAuthenticated: boolean
    user: UserData
    access_token: string
  }
}

export interface GetSession {
  sucess: number
  data?: UserData
}
