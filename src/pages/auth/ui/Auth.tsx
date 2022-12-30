import { Outlet } from 'react-router-dom'

import './styles.scss'

export function AuthPage() {
  return (
    <main className="auth-page">
      <section className="auth-page__form">
        <Outlet />
      </section>
    </main>
  )
}
