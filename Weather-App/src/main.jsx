import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import '@fontsource/poppins'; // default weight (400)

import { createTheme, ThemeProvider } from '@mui/material/styles'

// 🖌️ Create custom theme with Poppins
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
