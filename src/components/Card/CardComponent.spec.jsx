import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import CardComponent from './CardComponent'

describe('CardComponent component', () => {
  test('Testing Component', () => {
    const { getByText } = render(<CardComponent />)
  
    expect(getByText('React Tailwind Card with Image')).toBeTy()
  })
})

