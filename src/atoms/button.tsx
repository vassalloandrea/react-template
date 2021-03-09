import React from 'react'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  children,
}) => <button onClick={onClick}>{children}</button>

export default Button
