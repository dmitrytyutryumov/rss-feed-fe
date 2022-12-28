import { ui } from 'features/auth-form'
import './styles.scss'

export function Auth() {
  return (
    <main className="auth-page">
      <section className="auth-page__form">
        <ui.LoginForm />
      </section>
    </main>
  )
}
