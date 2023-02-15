import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClientProvider } from './hooks/useFetchIp';
import { SeachInputProvider } from './hooks/useSearchInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SeachInputProvider>
        <ClientProvider>
            <App />
        </ClientProvider>
    </SeachInputProvider>
);
