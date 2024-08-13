import { render, screen } from '@testing-library/react'
import { Counter } from './counter'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const counterElement = screen.getByRole('heading')
    expect(counterElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('increments a count of 1 after cliking the icnrement button', async () => {
    userEvent.setup() // Start a "session" with userEvent. All APIs returned by this function share an input device state and a default configuration.
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await userEvent.click(incrementButton) // all events of userEvent are asynchronous
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('renders a count of 10 after cliking the set button', async () => {
    userEvent.setup() // Start a "session" with userEvent
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    await userEvent.type(amountInput, '10') // other event, this is for write in input
    expect(amountInput).toHaveValue(10) // for element with value attribute like inputs
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await userEvent.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are fosuced in the right order ', async () => {
    userEvent.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })

    await userEvent.tab() // move focus to next element
    expect(incrementButton).toHaveFocus()
    await userEvent.tab() // move focus to next element
    expect(amountInput).toHaveFocus()
    await userEvent.tab() // move focus to next element
    expect(setButton).toHaveFocus()
  })
})
