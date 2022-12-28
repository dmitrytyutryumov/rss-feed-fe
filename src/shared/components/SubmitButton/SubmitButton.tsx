import './styles.scss'

export function SubmitButton({ className, children, ...props }: any) {
  console.log(className)
  const btnStyle = 'submit-btn' + ` ${className}` || ''
  return (
    <button className={btnStyle} type="submit" {...props}>
      {children || 'Submit'}
    </button>
  )
}
