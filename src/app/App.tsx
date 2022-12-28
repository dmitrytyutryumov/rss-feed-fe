import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import './styles/index.scss'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
