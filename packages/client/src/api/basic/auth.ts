import basicInstance from './basicInstance'
import { User } from './types'

export const getUserInfo = async (): Promise<User> => {
  return basicInstance.get(`/auth/user`)
}

export const logOut = async (): Promise<unknown> => {
  return basicInstance.post(`/auth/logout`)
}
