import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContextProvider from './context/ContextProvider';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}><App /></ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
)
