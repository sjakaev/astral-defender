import { useAsyncEffect } from './useAsyncEffect'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './reduxHooks'
import { fetchUser } from '../store/slices/userSlice'

export function useLoggedInUser() {
  // Убрать проверку после совмещения SSR и Redux
  if (typeof window !== 'undefined') {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    useAsyncEffect(async () => {
      if (user?.user.id) {
        return
      }

      try {
        await dispatch(fetchUser()).unwrap()
      } catch (error) {
        console.error(error)
        if (
          location.pathname !== '/' &&
          location.pathname !== '/game' &&
          location.pathname !== '/gameOver'
        ) {
          navigate('/')
        }
      }
    }, [navigate, user?.user.id])
  }
}
