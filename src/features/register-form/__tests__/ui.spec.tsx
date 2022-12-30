import { render } from '@testing-library/react'
import { useField } from 'formik'
import { BrowserRouter } from 'react-router-dom'

import { RegisterForm } from '../ui'

describe('test register form', () => {
  beforeEach(() => {
    useField.mockImplementation(() => [{}, { error: null, touched: false }])
  })
  it('test register form snapshot', () => {
    // Act
    const { asFragment } = render(<RegisterForm />, { wrapper: BrowserRouter })
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
