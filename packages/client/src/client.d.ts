declare const __NODE_ENV__: string
declare const __DOMAIN__: string
declare const __CLIENT_PORT__: string
declare global {
  interface Window {
    APP_INITIAL_STATE: RootState
  }
}

export {}
