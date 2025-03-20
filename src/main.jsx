import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <h1>React Hooks</h1>
        <App />
    </React.StrictMode>
)