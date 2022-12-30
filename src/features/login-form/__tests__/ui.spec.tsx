import { render } from '@testing-library/react'
import { useField } from 'formik'
import { BrowserRouter } from 'react-router-dom'

import { LoginForm } from '../ui'

describe('test login form', () => {
  beforeEach(() => {
    useField.mockImplementation(() => [{}, { error: null, touched: false }])
  })
  it('test login form snapshot', () => {
    // Act
    const { asFragment } = render(<LoginForm />, { wrapper: BrowserRouter })
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
