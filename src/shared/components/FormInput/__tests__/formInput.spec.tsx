import { render } from '@testing-library/react'
import { useField } from 'formik'
import { FormInput } from '../FormInput'

describe('test reset password form', () => {
  beforeEach(() => {
    useField.mockImplementation(() => [{}, { error: 'Error', touched: true }])
  })
  it('test reset password form snapshot', () => {
    // Act
    const { asFragment } = render(
      <form>
        <FormInput name="test" />
      </form>
    )
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
  it('test reset password form has error', () => {
    // Act
    const container = render(
      <form>
        <FormInput name="test" />
      </form>
    )
    // Assert
    expect(container.container.querySelector('[data-has-error="true"]'))
  })
})
