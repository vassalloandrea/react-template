import React from 'react'

import { cleanup, fireEvent } from '@testing-library/react'

import render from '../libs/testing-support'
import Button from './button'

describe('App', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    const component = render(<Button>This is a button</Button>)
    expect(component).toMatchSnapshot()
  })

  describe('Passing the onClick prop', () => {
    it('calls the onClick callback', () => {
      const callback = jest.fn()

      const { getByText } = render(
        <Button onClick={callback}>This is a button</Button>,
      )

      const node = getByText('This is a button')
      fireEvent.click(node)

      expect(callback).toHaveBeenCalled()
    })
  })
})
