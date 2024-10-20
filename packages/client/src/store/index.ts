import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ssrReducer from './slices/ssrSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const reducer = combineReducers({
  ssr: ssrReducer,
})

const store = configureStore({
  reducer,
  preloadedState:
    typeof window === 'undefined' ? undefined : window.APP_INITIAL_STATE,
})

export default store
