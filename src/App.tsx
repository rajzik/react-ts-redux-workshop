import React from 'react';
import { Router } from '@components';
import { Provider } from 'react-redux';
import { configureStore } from '@utils';



export default function App() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router />
        </Provider>
        
    )
}