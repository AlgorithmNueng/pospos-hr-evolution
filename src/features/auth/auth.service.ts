import httpClient from '@/httpClient'
import { GetSession, SignIn } from '@/types/auth.type'

type signInProps = {
  username: string
  password: string
}

export const signIn = async (credential: signInProps): Promise<SignIn> => {
  const { data: response } = await httpClient.post<SignIn>(`/auth/signin`, credential)
  return response
}

export const getSession = async (): Promise<GetSession> => {
  const response = await httpClient.get<GetSession>(`/admin-accounts/profile`)
  return response.data
}
