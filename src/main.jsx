import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import baseTheme from './theme.js'; 

const theme = extendTheme({
    ...baseTheme, 
    colors: {
        primary: '#1565C0', 
        secondary: '#BB86FC',
        success: '#00C853',
        error: '#D32F2F',
        warning: '#FFCA28',
        background: {
            light: '#F5F5F5',
            dark: '#121212',
        },
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);