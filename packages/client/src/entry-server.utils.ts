import { Request as ExpressRequest } from 'express'
import createCache from '@emotion/cache'
import { PageInitContext } from './routes'

export const createContext = (req: ExpressRequest): PageInitContext => ({
  clientToken: req.cookies.token,
})

export function createEmotionCache() {
  const cache = createCache({ key: 'ssr-css' })

  if (typeof window !== 'undefined') {
    cache.sheet.container = document.head
    cache.sheet.hydrate(document.querySelectorAll('style[data-emotion]'))
  }

  return cache
}

export const createUrl = (req: ExpressRequest) => {
  const origin = `${req.protocol}://${req.get('host')}`

  return new URL(req.originalUrl || req.url, origin)
}

export const createFetchRequest = (req: ExpressRequest) => {
  const url = createUrl(req)

  const controller = new AbortController()
  req.on('close', () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value)
        }
      } else {
        headers.set(key, values)
      }
    }
  }

  const init: {
    method: string
    headers: Headers
    signal: AbortSignal
    body?: any
  } = {
    method: req.method,
    headers,
    signal: controller.signal,
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body
  }

  return new Request(url.href, init)
}
