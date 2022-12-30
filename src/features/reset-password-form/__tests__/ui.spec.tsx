import { render } from '@testing-library/react'
import { useField } from 'formik'
import { BrowserRouter } from 'react-router-dom'

import { ResetPasswordForm } from '../ui'

describe('test reset password form', () => {
  beforeEach(() => {
    useField.mockImplementation(() => [{}, { error: null, touched: false }])
  })
  it('test reset password form snapshot', () => {
    // Act
    const { asFragment } = render(<ResetPasswordForm />, {
      wrapper: BrowserRouter,
    })
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
