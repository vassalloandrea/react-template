import React from 'react'

import render from './libs/testing-support'
import App from './app'

describe('App', () => {
  it('renders correctly', () => {
    const component = render(<App />)
    expect(component).toMatchSnapshot()
  })
})
