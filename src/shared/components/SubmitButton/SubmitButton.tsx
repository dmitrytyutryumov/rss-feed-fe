import './styles.scss'

export function SubmitButton({ className, children, ...props }) {
  const btnStyle = 'submit-btn' + ` ${className}` || ''
  return (
    <button className={btnStyle} type="submit" {...props}>
      {children || 'Submit'}
    </button>
  )
}
