import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.tsx'
import { MotionProvider } from './context/MotionContext'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <MotionProvider>
      <App />
    </MotionProvider>
  </StrictMode>
)

// The build prerenders #root; under `vite dev` it's empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
