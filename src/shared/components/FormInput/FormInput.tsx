import { useField } from 'formik'

import './style.scss'

export function FormInput({ label, name, className, ...props }) {
  const [field, meta] = useField(name)
  const hasError = meta.touched && meta.error

  return (
    <div
      className={'form-section ' + className || ''}
      data-has-error={Boolean(hasError)}
    >
      {label && (
        <label className="form-section__label" htmlFor="firstName">
          {label}
        </label>
      )}
      <input className="form-section__input" {...field} {...props} />
    </div>
  )
}
