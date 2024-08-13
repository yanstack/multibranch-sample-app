import { render, screen } from '@testing-library/react'

test('renders learn react link', () => {
  render(
    <div>
      <main aria-hidden="true">
        <button>Open dialog</button>
      </main>
      <main>
        <button role="dialog">Close dialog</button>
      </main>
    </div>,
  )
  const element = screen.getByRole('button', { hidden: true })
  console.log(element)
})
