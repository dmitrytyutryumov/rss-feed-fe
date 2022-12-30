import { render } from '@testing-library/react'
import { AuthPage } from '../ui'

describe('test auth page ui', () => {
  it('test auth page snapshot', () => {
    // Arrange
    // Act
    const { asFragment } = render(<AuthPage />)
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
