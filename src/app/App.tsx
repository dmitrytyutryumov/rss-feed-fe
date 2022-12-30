import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { router } from './routes'
import { store } from './store'

import './styles/index.scss'

export function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
