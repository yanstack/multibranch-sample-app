import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  //  QUERYBY or QUERYALLBY verify that element is not rendered or present in the document, return null if not find matching, otherwise return the element

  const skills = ['HTML', 'CSS', 'Javascript']

  test('Skills renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('Skills renders each skill correctly', () => {
    render(<Skills skills={skills} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(skills.length)
  })

  test('Renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('start learning button is eventually rendered', async () => {
    const view = render(<Skills skills={skills} />)
    //logRoles(view.container); // print in console the role information about the tags in the dom
    // screen.debug(); // print the dom tree of components in the console
    const startLearningButton = await screen.findByRole(
      'button',
      {
        // return a promise which resolves when an element is found, the promise is rejected if no element is found afeter default timeout of 1000ms
        name: 'Start learning',
      },
      {
        timeout: 1500,
      },
    )

    expect(startLearningButton).toBeInTheDocument()
  })
})
