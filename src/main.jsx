import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ContentProvider } from './contexts/ContentContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined') {
  console.log(
    '%c RH ',
    'background: #000; color: #fff; font-size: 24px; font-family: "Cormorant Garamond", serif; font-style: italic; padding: 8px 16px;'
  );
  console.log(
    '%cPhotographer & Writer — Minneapolis / St. Paul\n%cCurious about the code? Say hello → russheritage.com',
    'color: #333; font-size: 12px; font-family: Montserrat, sans-serif; letter-spacing: 0.05em;',
    'color: #999; font-size: 11px; font-family: Montserrat, sans-serif;'
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ContentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContentProvider>
    </ErrorBoundary>
  </StrictMode>,
)
