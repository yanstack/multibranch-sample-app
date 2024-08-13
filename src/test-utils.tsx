import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from './components/providers/AppProviders'

const customRender = (
  // custom provider definitions for all elements
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
