import './styles.scss'

export function SubmitButton({ className, children, ...props }: any) {
  const btnStyle = 'submit-btn' + ` ${className}` || ''
  return (
    <button className={btnStyle} type="submit" {...props}>
      {children || 'Submit'}
    </button>
  )
}
