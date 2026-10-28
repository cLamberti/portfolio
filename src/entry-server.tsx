// Build-time only: rendered in Node by scripts/prerender.mjs, never shipped to the browser.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import './i18n'
import App from './App.tsx'
import { MotionProvider } from './context/MotionContext'

export const render = () =>
  renderToString(
    <StrictMode>
      <MotionProvider>
        <App />
      </MotionProvider>
    </StrictMode>,
  )
