import React from 'react'

import {
  render as testingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'

const wrapper: React.FC = ({ children }) => <>{children}</>

const render = (
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult => testingLibraryRender(ui, { wrapper, ...options })

export default render
