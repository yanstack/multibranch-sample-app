import { render, screen } from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import userEvent from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(CounterTwo({ count: 0 }))
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })

  test('handlers are called correctly', async () => {
    const handleIncrement = jest.fn() // crater mock function
    const handleDecrement = jest.fn()
    render(
      CounterTwo({
        count: 0,
        handleIncrement: handleIncrement,
        handleDecrement: handleDecrement,
      }),
    )
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    await userEvent.click(incrementButton)
    await userEvent.click(decrementButton)
    expect(handleIncrement).toHaveBeenCalledTimes(1)
    expect(handleDecrement).toHaveBeenCalledTimes(1)
  })
})
