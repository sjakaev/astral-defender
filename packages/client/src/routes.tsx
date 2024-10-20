import Login from './pages/Login'
import MainMenu from './pages/MainMenu'
import ErrorPage404 from './pages/ErrorPage404'
import ErrorPage from './pages/Error'
import ErrorPage500 from './pages/Error500'
import GameOver from './pages/GameOver'
import GamePage from './pages/GamePage'
import Guide from './pages/Guide'
import { AppDispatch, RootState } from './store'

export type PageInitArgs = {
  dispatch: AppDispatch
  state: RootState
  ctx: PageInitContext
}

type Route = {
  path: string
  element: JSX.Element
  errorElement?: JSX.Element
  fetchData?: (args: PageInitArgs) => Promise<unknown>
}
export type PageInitContext = {
  clientToken?: string
}

const errorBoundary = <ErrorPage title="Something went wrong :( Try later." />

const routes = [
  {
    path: '/error500',
    element: <ErrorPage500 />,
  },
  {
    path: '*',
    element: <ErrorPage404 />,
  },
  {
    path: '/main_menu',
    element: <MainMenu />,
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/gameOver',
    element: <GameOver />,
  },
  {
    path: '/guide',
    element: <Guide />,
  },
].map((item: Route) => ({
  ...item,
  fetchData: item?.fetchData ? item.fetchData : () => Promise.resolve(),
  errorElement: errorBoundary,
}))

export default routes
