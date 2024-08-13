import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

describe('', () => {
  test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })

  test('Greet renders with a name', () => {
    render(<Greet name="Faust" />)
    const textElement = screen.getByText('Hello Faust')
    expect(textElement).toBeInTheDocument()
  })
})
