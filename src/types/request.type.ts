export type IRequestSignIn = Pick<IRequestSignUp, 'username' | 'password'>

export type IRequestForgot = Pick<IRequestSignUp, 'username'>

export interface IRequestSignUp {
  username: string
  password: string
  email: string
  avatarColor: string
  avatarImage: string
}

export interface ResponseError {
  message: string
  status: 'error'
  statusCode?: number
}
