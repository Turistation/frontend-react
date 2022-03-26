import './index.css';

import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AnimatePresence>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AnimatePresence>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
