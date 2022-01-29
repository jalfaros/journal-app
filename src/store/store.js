import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const combinedReducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});

// El store recibe siempre como inicialización uno o más reducers...

export const store = createStore(
    combinedReducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
