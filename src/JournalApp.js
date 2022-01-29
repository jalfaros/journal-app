import React from 'react';
import { Provider } from 'react-redux';
 
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';



export const JournalApp = () => {
    return (
        // Se envuelve el provider desde el punto más alto para poder proveer toda nuestra aplicación
        <Provider store = { store }>
            <AppRouter />
        </Provider>
    )
}
