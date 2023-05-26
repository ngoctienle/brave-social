import axios from 'src/services/utils/axios'

import { IRequestSignIn, IRequestSignUp } from 'src/types/request.type'

class AuthService {
  public signUp(body: IRequestSignUp) {
    return axios.post('/signup', body)
  }

  public signIn(body: IRequestSignIn) {
    return axios.post('/signin', body)
  }

  public forgotPassword(email: string) {
    return axios.post('/forgot-password', { email })
  }

  public resetPassword(token: string, body) {
    return axios.post(`/reset-password/${token}`, body)
  }
}

export const authService: AuthService = new AuthService()
