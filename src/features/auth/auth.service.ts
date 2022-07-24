import httpClient from '@/httpClient'

export type signUpProps = {
  email: string
  firstName: string
  lastName: string
  companyName: string
  phoneNumber: string
  password: string
}

// SignUp
// export const signUpApi = async (credential: signUpProps): Promise<SignUpResult> => {
//   const { data: response } = await httpClient.post<SignUpResult>(`/auth/signup`, credential)
//   return response
// }

// export type signInProps = {
//   email: string
//   password: string
// }

// export const signInApi = async (credential: signInProps): Promise<SignInResult> => {
//   const { data: response } = await httpClient.post<SignInResult>(`/auth/signin`, credential)
//   return response
// }
