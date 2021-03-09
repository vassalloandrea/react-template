import React from 'react'

import Button from './atoms/button'

const App: React.FC = () => (
  <div className="App">
    <Button onClick={() => alert('Hello world!')}>Click me!</Button>
  </div>
)

export default App
