import { render } from '@testing-library/react'
import { SubmitButton } from '../SubmitButton'

describe('test submit button', () => {
  it('test sumbit button', () => {
    // Act
    const { asFragment } = render(<SubmitButton />)
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
