import { render, screen } from '@testing-library/react'
import { Application } from './application'

describe('Application', () => {
  // GETBY or GETALLBY verify if element is present in the DOM, return error if not present otherwise return true when element is present.

  test('renders correctly', () => {
    render(<Application />)
    //----------------------------------------------------------------
    const name = screen.getByRole('textbox', {
      name: 'Name', // receie textcontent label linked to input, value of aria-label, or textcontent
    })
    expect(name).toBeInTheDocument()
    //----------------------------------------------------------------

    const headings = screen.getByRole('heading', {
      level: 2, // for heading level
    })
    expect(headings).toBeInTheDocument()

    //----------------------------------------------------------------
    const nameElement2 = screen.getByLabelText('Name', {
      // for text of label name and find the input element associated, can receive a object like second argument
      selector: 'input', // specifies the target element that has to be a input element
    })
    expect(nameElement2).toBeInTheDocument()

    //----------------------------------------------------------------
    const nameElement3 = screen.getByPlaceholderText('Fullname') // search for all elements with a placeholder and find one that matches the given text
    expect(nameElement3).toBeInTheDocument()

    //----------------------------------------------------------------
    const nameElement4 = screen.getByText('All fields are mandatory', {
      // search for all elements that have text node with textContent matching the given text
      selector: 'p', // specifies the type tag
    })
    expect(nameElement4).toBeInTheDocument()

    //----------------------------------------------------------------

    const nameElement5 = screen.getByDisplayValue('Vishwas') // Returns the input, textarea, or select element that has the matching display value.
    expect(nameElement5).toBeInTheDocument()

    //----------------------------------------------------------------
    const nameElement6 = screen.getByAltText('a person with a laptop') // This will return the element (normally an <img>) that has the given alt text. Note that it only supports elements which accept an alt attribute
    expect(nameElement6).toBeInTheDocument()
    //----------------------------------------------------------------

    const nameElement7 = screen.getByTitle('close') // This will return the element that has the given title attribute. Note that it only supports elements which accept a title attribute
    expect(nameElement7).toBeInTheDocument()
    //----------------------------------------------------------------
    const nameElement8 = screen.getByTestId('custom-element') // This will return the element that has the given testId attribute.
    expect(nameElement8).toBeInTheDocument()
    //----------------------------------------------------------------
    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()
  })
})
